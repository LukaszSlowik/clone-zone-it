"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, useAnimate, usePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {};

export function MyDialog({ children }: { children: ReactNode }) {
  let [isPresent, safeToRemove] = usePresence();
  let [overlay, animateOverlay] = useAnimate();
  let [content, animateContent] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await Promise.all([
          animateOverlay(overlay.current, { opacity: [0, 1] }),
          animateContent(content.current, {
            opacity: [0, 1],
            marginTop: [20, 0],
          }),
        ]);
      };

      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await Promise.all([
          animateOverlay(overlay.current, { opacity: [1, 0] }),
          animateContent(content.current, {
            opacity: [1, 0],
            marginTop: [0, 20],
          }),
        ]);

        safeToRemove && safeToRemove();
      };
      exitAnimation();
    }
  }, [
    animateContent,
    animateOverlay,
    content,
    isPresent,
    overlay,
    safeToRemove,
  ]);

  return (
    <Dialog.Portal forceMount>
      <Dialog.Overlay
        ref={overlay}
        className="fixed inset-0 z-[999]  bg-black/50 "
      />
      <Dialog.Content
        ref={content}
        className="fixed left-1/2 top-1/2 z-[999] -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100   text-xl shadow"
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
