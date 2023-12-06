"use client";
import { useSetActiveLinkActions } from "@/store/active-link-store";
import React from "react";

type Props = {};

const Testforbutton = (props: Props) => {
  const actions = useSetActiveLinkActions();
  return (
    <div>
      {" "}
      <button onClick={() => actions.setActiveLink("/en#about-us")}>
        testasdas
      </button>
    </div>
  );
};

export default Testforbutton;
