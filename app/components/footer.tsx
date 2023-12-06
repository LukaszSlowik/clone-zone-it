import { cn } from "@/lib/utils";
import { Open_Sans, Teko } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialList from "./social-list";
import { DictionaryType } from "@/lib/dictionary";

type Props = {
  dictionary: DictionaryType;
};
const openSans = Open_Sans({ subsets: ["latin"], display: "block" });
const teko = Teko({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const Footer = ({ dictionary }: Props) => {
  return (
    <div
      className={cn(
        `min-h-[400px] px-4 py-20 text-xl md:pl-20 `,
        openSans.className,
      )}
    >
      <h1
        className={cn(
          `max-w-3xl border-b-2 border-b-black pb-2 text-4xl uppercase`,
          teko.className,
        )}
      >
        {`${dictionary["our-office"]}`}
      </h1>
      <div className="grid grid-cols-1 py-8 text-base   opacity-70 sm:grid-cols-2 md:grid-cols-4">
        <div className="  ">
          <div className="mx-12 w-fit  sm:mx-0">
            <p className="py-4">
              Zone IT Sp. z o.o.
              <br />
              <br />
              Head Office
              <br />
              Wagonowa 2d
              <br />
              53-609 Wrocław
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="mx-12   sm:mx-0 md:mx-auto">
            <p className="py-4">
              biuro@zoneit.pl
              <br />
              job@zoneit.pl
              <br />
              office@zoneit.pl
              <br />
              <br />
              Tel.: +48 71 727 68 00
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="mx-12   sm:mx-0">
            <p className="py-4 text-sm">
              Dembowskiego 59/5
              <br />
              51-670 Wrocław
              <br />
              Sąd Rejonowy dla Wrocławia-Fabrycznej
              <br />
              VI Wydział Gospodarczy
              <br />
              KRS 0000401815
              <br />
              NIP 898-219-80-01
              <br />
              Regon 021758025
            </p>
          </div>
        </div>
        <div className=" mx-12  sm:mx-0">
          <h1
            className={cn(`py-4 opacity-100`, teko.className)}
          >{`${dictionary["follow-us"]}`}</h1>
          <SocialList className="opacity-100" />
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-t-black pt-2  text-xs opacity-70">
        <div className="flex  gap-2">
          <span>Lorem</span>
          <span>dolor</span>
        </div>
        <div className="text-right ">
          <span>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
