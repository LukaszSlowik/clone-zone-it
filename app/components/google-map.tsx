"use client";
import React, { useMemo } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

type Props = {};

const GoogleMapComp = (props: Props) => {
  //const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 51.11341944431368, lng: 16.989634014782805 }),
    [],
  );
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  //   const [mounted, setMounted] = React.useState(false);
  //   React.useEffect(() => {
  //     if (!mounted) return;
  //     setMounted(true);
  //   }, [mounted]);
  //   const mapOptions = useMemo<google.maps.MapOptions>(
  //     () => ({
  //       disableDefaultUI: true,
  //       clickableIcons: true,
  //       scrollwheel: false,
  //     }),
  //     [],
  //   );
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  //     libraries: libraries as any,
  //   });
  return (
    <div className="">
      {/* <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string}
      > */}
      {isLoaded && (
        <GoogleMap
          //options={mapOptions}
          options={{
            scrollwheel: false,
            backgroundColor: "transparent",

            styles: [
              {
                featureType: "all",
                stylers: [{ saturation: -90 }],
              },
            ],
          }}
          zoom={17}
          center={mapCenter}
          //mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100%", height: "40vh" }}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={mapCenter} icon={"/images/pin-map.png"} />
        </GoogleMap>
      )}
      {/* </LoadScript> */}
    </div>
  );
};

export default GoogleMapComp;
