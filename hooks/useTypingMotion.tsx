"use client";
import React, { use, useEffect } from "react";

type Props = {
  arrayOfText: string[];
  sleep?: number;
};

export const useTypingMotion = ({ arrayOfText, sleep = 100 }: Props) => {
  const [text, setText] = React.useState("");
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  useEffect(() => {
    let curPhraseIndex = 0;
    let isCancelled = false;

    async function loop() {
      await delay(1000);
      while (!isCancelled) {
        let curWord = arrayOfText[curPhraseIndex];
        for (let i = 0; i < curWord.length; i++) {
          setText(curWord.slice(0, i + 1));
          await delay(sleep);
          if (isCancelled) {
            return;
          }
        }
        await delay(sleep * 10);
        for (let i = curWord.length; i > 0; i--) {
          setText(curWord.slice(0, i - 1));
          await delay(sleep);
          if (isCancelled) {
            return;
          }
        }
        await delay(sleep * 5);
        if (curPhraseIndex === arrayOfText.length - 1) {
          curPhraseIndex = 0;
        } else {
          curPhraseIndex++;
        }
      }

      if (isCancelled) {
        return;
      }
    }

    loop();
    return () => {
      isCancelled = true;
    };
  }, [arrayOfText, sleep]);

  return text;
};
