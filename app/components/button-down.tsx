"use client";

import Link from "next/link";
import React from "react";
import { LuChevronDown } from "react-icons/lu";

type Props = {};

const ButtonDown = (props: Props) => {
  return (
    <Link href="#about-us">
      <div className="relative h-16 w-16 animate-ring-glow  cursor-pointer rounded-full bg-red-500 ">
        <LuChevronDown className="absolute left-[50%] top-[50%] mt-1 h-12 w-12 translate-x-[-50%] translate-y-[-50%] text-white" />
      </div>
    </Link>
  );
};

export default ButtonDown;
