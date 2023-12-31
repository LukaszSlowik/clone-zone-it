import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TypingMotion from "./typing-motion";
import SocialList from "./social-list";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
type Props = {};
const openSans = Open_Sans({ subsets: ["latin"], display: "block" });
const AutoPresentation = (props: Props) => {
  return (
    <>
      <div className={cn(`min-w-[270px] p-2 md:p-8`, openSans.className)}>
        <div className="flex flex-col items-center justify-center ">
          <div>
            <Avatar.Root className="relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full ">
              <Avatar.Image
                className="aspect-square h-full w-full"
                src="/images/my.png"
                alt="logo"
                width={45}
                height={45}
              />

              <Avatar.Fallback className="bg-muted flex h-full w-full items-center justify-center rounded-full">
                LS
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
          <TypingMotion />
          <div className="flex  items-center gap-1 py-4">
            <p>You can contact me via : </p>
            <a
              href="https://www.linkedin.com/in/%C5%82ukasz-s%C5%82owik-05629b175/"
              title="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex  items-center gap-1">
            <p>Check my projects : </p>
            <a
              href="https://github.com/LukaszSlowik?tab=repositories"
              title="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="pt-4 text-sm">
            <p className="">
              {" "}
              See my portfolio:{" "}
              <a
                className="cursor-pointer text-blue-600  underline"
                href="https://lukaszpro.eu/"
                title="portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                lukaszpro.eu
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoPresentation;
