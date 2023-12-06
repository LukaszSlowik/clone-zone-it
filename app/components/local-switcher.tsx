"use client";
import React, { useEffect } from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { cn } from "@/lib/utils";
import { LuChevronDown } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  useActiveLink,
  useSetActiveLinkActions,
} from "@/store/active-link-store";
type Props = {
  lang: string;
  className?: string;
};

const LocalSwitcher = ({ lang, className }: Props) => {
  const [open, setOpen] = React.useState(false);
  //const [activeLink, setActiveLink] = React.useState("");
  //const [hydrated, setHydrated] = React.useState(false);
  //const pathname = usePathname();

  const activeLink = useActiveLink();
  const actions = useSetActiveLinkActions();
  //console.log("active from local switcher:", activeLink);
  //   useEffect(() => {
  //     if (!hydrated) return;
  //     setHydrated(true);
  //   }, [hydrated]);
  //   useEffect(() => {
  //     setActiveLink(window.location.hash);
  //   }, [activeLink]);

  //   useEffect(() => {
  //     if (!hydrated) return;
  //     setHydrated(true);
  //   }, [hydrated]);

  //   const redirectedPathName = (locale: string) => {
  //     if (!pathname) return "/";
  //     const segments = pathname.split("/");
  //     segments[1] = locale;
  //     //console.log("new path:", segments.join("/"));
  //     return segments.join("/");
  //   };
  const redirectedPathName = (locale: string) => {
    if (!activeLink) return "/";
    const segments = activeLink.split("/");
    console.log("pathname for :", activeLink);
    console.log("segments", segments);

    // // //segments[1] = locale;
    // if (segments[1].includes("#")) {
    //   let hash = segments[1].split("#")[1];
    //   let lang = segments[1].split("#")[0];
    //   segments[1] = `${lang}#${hash}`;
    // } else {
    //   segments[1] = `${locale}${segments[0]}`;
    // }

    if (segments[1].includes("#")) {
      const splitted = segments[1].split("#");
      console.log("splitted", splitted);
      segments[1] = `${locale}#${splitted[1]}`;
    } else {
      segments[1] = `${locale}${segments[0]}`;
    }
    console.log("new path for :", locale, segments.join("/"));
    // console.log("new path:", segments.join("/"));
    //actions.setActiveLink(segments.join("/"));
    //actions.setActiveLink("/");
    //return "/";
    return segments.join("/");
  };
  //   const redirectedPathName = (locale: string) => {
  //     if (activeLink === "") return "/";
  //     const segments = activeLink.split("/");
  //     segments[1] = locale;
  //     //console.log("new path:", segments.join("/"));
  //     return segments.join("/");
  //   };

  return (
    <>
      <Dropdown.Root open={open} onOpenChange={setOpen} modal={false}>
        <Dropdown.Trigger
          className={cn(
            ` group  my-auto flex  w-fit  items-center px-2  py-2  uppercase hover:bg-neutral-100 data-[state=open]:border-b-transparent`,
            className,
          )}
        >
          {lang}{" "}
          <LuChevronDown
            className={cn(
              `h-6 w-6 transition-transform duration-300 group-data-[state=open]:rotate-180`,
            )}
          />
        </Dropdown.Trigger>

        <AnimatePresence>
          {open && (
            <Dropdown.Portal forceMount>
              <Dropdown.Content
                className={cn(
                  `
              group  z-[999]  border border-transparent  bg-white pt-4  shadow-md `,
                  className,
                )}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className="mb-2 space-y-4 overflow-hidden"
                >
                  {i18n.locales.map((locale, index) => {
                    return (
                      <motion.div
                        key={locale}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{
                          x: "100%",
                          transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.1 * (i18n.locales.length - index - 1),
                          },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          delay: 0.1 * index,
                        }}
                      >
                        <Dropdown.Item
                          key={locale}
                          className=" "
                          onClick={() => {
                            const activeLink = redirectedPathName(locale);
                            actions.setActiveLink(activeLink);
                          }}
                        >
                          <Link
                            href={redirectedPathName(locale)}
                            className=" flex w-full items-center justify-center bg-slate-100/50  transition-all hover:bg-red-600 hover:text-white
            
                          dark:bg-transparent
                          "
                          >
                            <div className="h-full  px-4 uppercase">
                              {locale}
                            </div>
                          </Link>
                        </Dropdown.Item>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </Dropdown.Content>
            </Dropdown.Portal>
          )}
        </AnimatePresence>
      </Dropdown.Root>
    </>
  );
};

export default LocalSwitcher;
