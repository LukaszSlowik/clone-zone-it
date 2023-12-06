"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useSetActiveLinkActions } from "@/store/active-link-store";
type Props = {
  className?: string;
  links: { href: string; label: string }[];
};

const Navbar = ({ className, links }: Props) => {
  const pathname = usePathname();
  const [hydrated, setHydrated] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("any");
  const actions = useSetActiveLinkActions();
  console.log("activeLink:", activeLink);
  console.log("href:", links);

  //   useEffect(() => {
  //     if (!hydrated) return;
  //     setHydrated(true);
  //   }, [hydrated]);

  useEffect(() => {
    if (activeLink === "any") {
      console.log("hash:", window.location.hash);
      console.log("pathname:", pathname);
      if (window.location.hash.length === 0) {
        setActiveLink(pathname);
        actions.setActiveLink(pathname);
      } else {
        setActiveLink(window.location.hash);
        actions.setActiveLink(window.location.hash);
      }
    }
  }, [actions, activeLink, pathname]);

  return (
    <nav className="h-full ">
      <ul className={cn(`flex h-full gap-6`, className)}>
        {links.map(({ href, label }) => (
          <li
            key={`${href}${label}`}
            onClick={() => {
              setActiveLink(href);
              actions.setActiveLink(href);
            }}
            className={cn(
              ` my-2 flex items-center justify-center border-b-4 text-xl font-light transition hover:text-red-500`,
              (href.includes(activeLink) && activeLink.length > 3) ||
                (href.length === 3 &&
                  activeLink.length <= 3 &&
                  activeLink !== "any")
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
    </nav>
  );
};

export default Navbar;
