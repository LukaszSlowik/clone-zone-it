import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import OpenPopupWrapper from "./open-popup-wrapper";
import { DictionaryType } from "@/lib/dictionary";

type Props = {
  dictionary: DictionaryType;
};

const openSans = Open_Sans({ subsets: ["latin"], display: "block" });

const Offers = ({ dictionary }: Props) => {
  return (
    <div className=" min-h-[500px]    text-white">
      <div className=" grid  grid-cols-1    bg-blue-400 md:grid-cols-2 ">
        <div
          className="flex flex-col items-start justify-start gap-1  
          bg-[url('/images/bg-apps.jpg')] bg-cover bg-center
          bg-no-repeat 
          px-12 py-8  md:pl-[30%]"
        >
          <h1 className="text-4xl uppercase tracking-wide">{`${dictionary.services["it-title"]}`}</h1>
          <p
            className={cn(
              ` text-sm text-neutral-300 md:min-h-[130px] md:max-w-sm`,
              openSans.className,
            )}
          >
            {`${dictionary.services["it-description"]}`}
          </p>
          <OpenPopupWrapper>
            <button
              className={cn(
                `    cursor-pointer   border-2 border-white px-[20px]   pt-1 text-xl   uppercase
                transition-all duration-1000 hover:border-zinc-400  hover:bg-zinc-400 `,
              )}
              //href={"/"}
            >
              {" "}
              {`${dictionary["read-more"]}`}
            </button>
          </OpenPopupWrapper>
        </div>
        <div className="   flex  flex-col items-start justify-start gap-1  bg-[url('/images/bg-programers.jpg')] bg-cover bg-no-repeat px-12 py-8 md:pl-[10%] ">
          <h1 className="text-4xl uppercase tracking-wide">
            {`${dictionary.services["solution-title"]}`}
          </h1>
          <p
            className={cn(
              `  text-sm text-neutral-300 md:min-h-[130px] md:max-w-sm`,
              openSans.className,
            )}
          >
            {`${dictionary.services["solution-description"]}`}
          </p>
          <OpenPopupWrapper>
            <button
              className={cn(
                `    cursor-pointer   border-2 border-white px-[20px]   pt-1 text-xl   uppercase
                transition-all duration-1000 hover:border-zinc-400  hover:bg-zinc-400 `,
              )}
              //href={"/"}
            >
              {" "}
              {`${dictionary["read-more"]}`}
            </button>
          </OpenPopupWrapper>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-1 
          bg-[url('/images/bg-trades.jpg')] bg-cover bg-center
          bg-no-repeat 
          px-12 pb-12 pt-20  md:pl-[15%]"
      >
        <h1 className="text-4xl uppercase tracking-wide">
          {`${dictionary.services["recruitment-title"]}`}
        </h1>
        <p className={cn(` pb-4  text-sm md:max-w-xl`, openSans.className)}>
          {`${dictionary.services["solution-description"]}`}
        </p>
        <OpenPopupWrapper>
          <button
            className={cn(
              `    cursor-pointer   border-2 border-white px-[20px]   pt-1 text-xl   uppercase
                transition-all duration-1000 hover:border-zinc-400  hover:bg-zinc-400 `,
            )}
            //href={"/"}
          >
            {" "}
            {`${dictionary["read-more"]}`}
          </button>
        </OpenPopupWrapper>
      </div>
    </div>
  );
};

export default Offers;
