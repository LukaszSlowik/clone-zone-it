import React from "react";
import { MyDialog } from "./my-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";
import AutoPresentation from "./auto-presentation";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
type Props = {
  open: boolean;
  setOpen: any;
};
const openSans = Open_Sans({ subsets: ["latin"], display: "block" });
const PopupAutoPresentation = ({ open, setOpen }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* <Dialog.Trigger>test</Dialog.Trigger> */}
      <AnimatePresence>
        {open && (
          <MyDialog key="dialog">
            <div className={cn(` p-4`, openSans.className)}>
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="fixed right-2 top-2 cursor-pointer  hover:opacity-60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
              <AutoPresentation />
            </div>
          </MyDialog>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default PopupAutoPresentation;
