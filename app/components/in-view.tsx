"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import {
  useActiveLink,
  useSetActiveLinkActions,
} from "@/store/active-link-store";
type Props = {
  activeLink: string;
  children: React.ReactNode;
};

const InViewComp = ({ activeLink, children }: Props) => {
  const actions = useSetActiveLinkActions();
  const activeLinkFromStore = useActiveLink();

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: "0px 0px",
    threshold: 1,
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        console.log("visible:", activeLink);
        const first = activeLinkFromStore.split("#")[0];
        let newLink = `${first}#${activeLink}`;
        if (activeLink.length === 0) {
          newLink = `${first}`;
        }

        console.log("newLink:", newLink);
        actions.setActiveLink(newLink);
      }, 300); // 2000 milliseconds = 2 seconds

      // Clear the timeout if the component unmounts before the timeout finishes
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, activeLink, actions, activeLinkFromStore]);

  return (
    <div ref={ref} className="scroll-mt-20" id={activeLink}>
      {children}
    </div>
  );
};

export default InViewComp;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
