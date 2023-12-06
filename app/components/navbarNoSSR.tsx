"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  useActiveLink,
  useSetActiveLinkActions,
} from "@/store/active-link-store";
type Props = {
  className?: string;
  links: { href: string; label: string }[];
};

const NavbarNoSRR = ({ className, links }: Props) => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = React.useState(false);
  //const [hydrated, setHydrated] = React.useState(false);
  //const [activeLink, setActiveLink] = React.useState(
  //  window.location.hash.length === 0 ? pathname : window.location.hash,
  // );
  // const [hash, setHash] = React.useState(window.location.hash);
  const actions = useSetActiveLinkActions();
  const activeLink = useActiveLink();

  useEffect(() => {
    if (!activeLink)
      actions.setActiveLink(window.location.pathname + window.location.hash);
    console.log(
      "path + hash:",
      window.location.pathname + window.location.hash,
    );
    // }, [activeLink, pathname, actions]);

    //   actions.setActiveLink(window.location.pathname + window.location.hash)
  }, [actions, activeLink]);

  // console.log("activeLink:", activeLink);
  // console.log("href:", links);
  // console.log("the same ? :", activeLink === "/de/#services");

  if (!activeLink) return null;
  return (
    <nav className="h-full">
      <ul className={cn(`flex h-full gap-6  max-lg:hidden`, className)}>
        {links.map(({ href, label }) => (
          <li
            // layout
            // layoutId="navbar"
            key={`${href}${label}`}
            onClick={() => {
              //setActiveLink(href);
              actions.setActiveLink(href);
            }}
            className={cn(
              ` my-2 flex items-center justify-center border-b-4 text-xl font-light transition-all hover:text-red-500`,

              href == activeLink
                ? " border-red-500 text-red-500"
                : "border-transparent",
            )}
          >
            <Link href={href} className="  ">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {mobileMenu && (
          <motion.ul
            initial={{ opacity: 1, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 1, height: 0 }}
            key="mobileMenu"
            className="absolute left-0 top-[80px] z-[20] flex w-full flex-col items-center justify-center overflow-hidden  bg-[#f5f7fb]  uppercase  lg:hidden"
          >
            {links.map(({ href, label }) => (
              <li
                // layout
                // layoutId="navbar"
                key={`${href}${label}`}
                onClick={() => {
                  //setActiveLink(href);
                  actions.setActiveLink(href);
                  setMobileMenu(false);
                }}
                className={cn(
                  `  flex w-full items-center justify-center  text-xl font-light transition-all hover:bg-red-500 hover:text-white`,

                  href == activeLink
                    ? " border-red-500 text-red-500"
                    : "border-transparent",
                )}
              >
                <Link href={href} className=" mx-auto w-full text-center ">
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <div
        className={cn(
          `flex h-full justify-center  text-2xl  lg:hidden`,
          className,
        )}
      >
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-base hover:text-red-500"
        >
          Menu:
        </button>
        <div></div>
      </div>
    </nav>
  );
};

export default NavbarNoSRR;
