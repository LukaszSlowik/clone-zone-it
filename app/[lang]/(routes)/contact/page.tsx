import FormComp from "@/app/components/form-comp";
import GoogleMapComp from "@/app/components/google-map";
import { Locale } from "@/i18n.config";
import { DictionaryType, getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { Open_Sans, Teko } from "next/font/google";
import React from "react";

type Props = {
  params: { lang: Locale };
};
const openSans = Open_Sans({ subsets: ["latin"], display: "block" });
const teko = Teko({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const Page = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <div className="h-[150px] bg-[url('/images/top-page-firm.jpg')]"></div>
      <FormComp
        openSans={openSans}
        teko={teko}
        dictionary={dictionary}
        lang={params.lang}
      />

      <div className=" mx-auto w-fit  max-w-3xl px-4 pb-16 text-5xl uppercase md:mx-0 md:px-32">
        <h1 className="py-4">{`${dictionary["contact-with-us"]}`}</h1>
        <div className=" grid  grid-cols-1 gap-8  text-3xl md:grid-cols-2">
          <div className="">
            <p className="text-red-600 max-sm:text-center">{`${dictionary.office}`}</p>
            <p className="max-sm:text-center">WAGONOWA 2D</p>
            <p className="max-sm:text-center">53-609 WROCŁAW</p>
          </div>
          <div className="min-w-[250px] max-sm:text-center">
            <p>
              <span className=" inline-block w-[7ch]">E-Mail:</span>
              <span className="  text-red-600">BIURO@ZONEIT.PL</span>{" "}
            </p>
            <p>
              <span className="inline-block w-[7ch]">Tel:</span>
              <span className=" text-red-600">+48 71 727 68 00</span>{" "}
            </p>
            <p>
              <span className="inline-block w-[7ch]">Fax:</span>
              <span className="  text-red-600">+48 71 796 44 24</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <GoogleMapComp />
    </div>
  );
};

export default Page;
