"use client";

import React, { useEffect } from "react";
import { useTypingMotion } from "@/hooks/useTypingMotion";

type Props = {};

const phases = [
  "to write a code",
  "swimming",
  "to create webpages",
  "running",
  "climbing",
];
//let sleep = 100;

const TypingMotion = (props: Props) => {
  const text = useTypingMotion({ arrayOfText: phases });

  return (
    <div className="w-full px-2 py-2 text-2xl">
      <h1 className="  w-full text-center ">Hey I'm Lukasz</h1>
      <div className="  flex h-auto flex-col  text-xl ">
        <p className="text-center ">
          <span className=" ">I like </span>
          <span className="text-bold w-full text-blue-400">
            {"  "}
            {text}
          </span>
          <span className="animate-blink    text-blue-400">|</span>
        </p>

        <div className=""> </div>
      </div>
      <h1 className="pt-4 text-base">
        I created this page based on{" "}
        <a
          className="cursor-pointer text-blue-600  underline"
          href="https://zoneit.pl/"
          title="zoneit.pl "
          target="_blank"
          rel="noopener noreferrer"
        >
          zoneit.pl
        </a>
      </h1>
    </div>
    // <div className="px-2 py-2 text-2xl">
    //   <h1 className="   text-left ">Hey I'm Lukasz</h1>
    //   <div className=" relative h-auto  w-fit ">
    //     <span className="ml-[-30px] text-left">I like {"     "} </span>
    //     <div className="absolute bottom-0 left-[110%] w-full min-w-[400px]">
    //       {" "}
    //       <span className="text-bold w-full text-blue-400">
    //         {"  "}
    //         {text}
    //       </span>
    //       <span className="animate-blink   text-4xl text-blue-400">|</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TypingMotion;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
