"use client";
import { DictionaryType } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

import { useCountUp } from "react-countup";
import { useIntersectionObserver } from "usehooks-ts";
type Props = {
  font: any;
  dictionary: DictionaryType;
};

const Counter = ({ font, dictionary }: Props) => {
  const [hasStarted, setHasStarted] = useState(false);
  const countUpRef1 = useRef<HTMLElement | null>(null);
  const countUpRef2 = useRef<HTMLElement | null>(null);
  const countUpRef3 = useRef<HTMLElement | null>(null);
  const countUpRef4 = useRef<HTMLElement | null>(null);
  const countUpRef5 = useRef<HTMLElement | null>(null);
  const entry = useIntersectionObserver(countUpRef5, {
    root: null,
    rootMargin: "0px 0px",
    threshold: 1,
  });
  const isVisible = !!entry?.isIntersecting;

  const { start: start1 } = useCountUp({
    ref: countUpRef1,
    start: 0,

    end: 25,
    duration: 2,
    startOnMount: false,
  });
  const { start: start2 } = useCountUp({
    ref: countUpRef2,
    start: 0,

    end: 10,
    duration: 2,
    startOnMount: false,
  });
  const { start: start3 } = useCountUp({
    ref: countUpRef3,
    start: 0,

    end: 108,
    duration: 2,
    startOnMount: false,
  });
  const { start: start4 } = useCountUp({
    ref: countUpRef4,
    start: 0,

    end: 457,
    duration: 2,
    startOnMount: false,
  });
  const { start: start5 } = useCountUp({
    ref: countUpRef5,
    start: 0,
    end: 100,

    duration: 2,
    startOnMount: false,
  });
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isVisible && !hasStarted) {
        Promise.all([start1(), start2(), start3(), start4(), start5()]);
        setHasStarted(true);
      }
    }, 0); // 2000 milliseconds = 2 seconds
    return () => clearTimeout(timeoutId);
  }, [isVisible, start1, start2, start3, start4, start5, hasStarted]);
  return (
    <div className={cn(` px-4 text-4xl uppercase`, font.className)}>
      <ul>
        <li>
          <span
            ref={countUpRef1}
            className="inline-block px-2 font-semibold text-red-500"
          ></span>{" "}
          {`${dictionary.numbers["years-of-experience"]}`}
        </li>
        <li>
          <span
            ref={countUpRef2}
            className="inline-block px-2 font-semibold text-red-500"
          ></span>
          {`${dictionary.numbers["years-company"]}`}
        </li>
        <li>
          <span
            ref={countUpRef3}
            className="inline-block px-2 font-semibold text-red-500"
          ></span>
          {`${dictionary.numbers["projects"]}`}
        </li>
        <li>
          <span
            ref={countUpRef4}
            className="inline-block px-2 font-semibold text-red-500"
          ></span>
          {`${dictionary.numbers["specialists"]}`}
        </li>
        <li>
          <span
            ref={countUpRef5}
            className="inline-block px-2 font-semibold text-red-500"
          ></span>
          {`${dictionary.numbers["reliablilty"]}`}
        </li>
      </ul>
    </div>
  );
};

export default Counter;
