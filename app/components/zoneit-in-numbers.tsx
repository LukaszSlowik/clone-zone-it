import { cn } from "@/lib/utils";
import { Teko } from "next/font/google";
import Image from "next/image";
import React from "react";
import Counter from "./counter";
import { DictionaryType } from "@/lib/dictionary";

type Props = {
  dictionary: DictionaryType;
};
const teko = Teko({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const ZoneitInNumbers = ({ dictionary }: Props) => {
  return (
    <div className={cn(``, teko.className)}>
      <div className="mx-auto flex w-fit flex-col items-center gap-4  py-4">
        <Image
          src="/images/icon-world.png"
          width={95}
          height={46}
          alt="zoneit in numbers"
        />
        <h1 className="tracking-wid text-5xl ">
          {" "}
          {`${dictionary["zone-it-in-numbers"]}`}
        </h1>
      </div>
      <div className=" mx-auto grid  max-w-5xl justify-center gap-4 md:grid-cols-3 ">
        <Image
          src="/images/graf-map.png"
          width={500}
          height={300}
          alt="zoneit in numbers"
          className="col-span-2  h-full w-full max-md:hidden"
        />
        <Counter font={teko} dictionary={dictionary} />
      </div>
    </div>
  );
};

export default ZoneitInNumbers;
