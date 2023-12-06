import { DictionaryType } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import React from "react";

type Props = {
  dictionary: DictionaryType;
};
const openSans = Open_Sans({ subsets: ["latin"], display: "block" });
const CooperationModels = ({ dictionary }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 text-4xl">
      <div className="pb-16 sm:px-20">
        <h1 className="mx-auto  max-w-[850px]  text-center text-5xl ">
          {`${dictionary.jobs["delivery-models-title"]}`}
        </h1>
        <h2 className={cn(`text-xl opacity-50`, openSans.className)}>
          {`${dictionary.jobs["delivery-models-description"]}`}
        </h2>
      </div>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
        <Models
          typeOfContract={`${dictionary.jobs.onsite}`}
          description={`${dictionary.jobs["offshore-description"]}`}
        />
        <Models
          typeOfContract={`${dictionary.jobs.nearshore}`}
          description={`${dictionary.jobs["nearshore-description"]}`}
        />
        <Models
          typeOfContract={`${dictionary.jobs.offshore}`}
          description={`${dictionary.jobs["onsite-description"]}`}
        />
      </div>
    </div>
  );
};

export default CooperationModels;

type ModelsType = {
  className?: string;
  children?: React.ReactNode;
  typeOfContract: string;
  description?: string;
};

const Models = ({ typeOfContract, description }: ModelsType) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 ">
        <div className="w-fit border border-black px-8 pt-2 text-3xl uppercase">
          {typeOfContract}
        </div>
        <div
          className={cn(`w-fit  px-4 text-center text-sm `, openSans.className)}
        >
          {description}
        </div>
      </div>
    </>
  );
};
