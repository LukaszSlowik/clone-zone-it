"use client";
import { LoadScript } from "@react-google-maps/api";
import { type } from "os";

type Props = {
  children?: React.ReactNode;
};
export const GoogleMapsProvider = ({ children }: Props) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string}
    >
      {children}
    </LoadScript>
  );
};
