"use client";
import React, { useState } from "react";
import PopupAutoPresentation from "./popup-auto-presentation";

type Props = {
  children: React.ReactNode;
};

const OpenPopupWrapper = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </div>
      {open && <PopupAutoPresentation open={open} setOpen={setOpen} />}
    </>
  );
};

export default OpenPopupWrapper;
