"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";
import { MyDialog } from "./my-dialog";
import AutoPresentation from "./auto-presentation";
import { getSchema } from "@/validation";
import { Locale } from "@/i18n.config";
//import { FormValues, schema } from "@/validation";

type Props = {
  openSans?: any;
  teko?: any;
  dictionary: any;
  lang: Locale;
};

const FormComp = ({ openSans, teko, dictionary, lang }: Props) => {
  let [open, setOpen] = useState(false);
  let [client, setClient] = useState(false);

  const schema = getSchema(lang);
  type FormValues = z.infer<typeof schema>;
  useEffect(() => {
    setClient(true);
  }, [client]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    setOpen(true);
    console.log(data);
  };
  if (!client) return;
  return (
    <div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        {/* <Dialog.Trigger>test</Dialog.Trigger> */}
        <AnimatePresence>
          {open && (
            <MyDialog key="dialog">
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="fixed right-2 top-2 cursor-pointer hover:opacity-60"
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
              <div className={cn(`min-w-[300px] p-4`, openSans.className)}>
                <AutoPresentation />
              </div>
            </MyDialog>
          )}
        </AnimatePresence>
      </Dialog.Root>

      <div
        className={cn(
          ` mx-4 max-w-5xl  pb-6 pt-10 md:mx-auto`,
          openSans.className,
        )}
      >
        <label className={cn(`text-5xl uppercase`, teko.className)}>
          {`${dictionary["contact-with-us"]}`}
        </label>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-12 mt-4 w-full space-y-2 "
        >
          <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
            <div className=" max-w-sm">
              <input
                {...register("name")}
                type="text"
                className={cn(
                  "w-full  border border-black px-2 py-1 text-black",
                  errors.name && "border-red-600",
                )}
                placeholder={`${dictionary.form["name"]}`}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <div className="text-xs text-red-600">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className=" max-w-sm">
              <input
                {...register("email")}
                type="text"
                className={cn(
                  "w-full  border border-black px-2 py-1 text-black",
                  errors.email && "border-red-600",
                )}
                placeholder="E-mail"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <div className="text-xs text-red-600">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className=" max-w-sm">
              <input
                {...register("phone")}
                type="text"
                className=" w-full border border-black px-2 py-1 text-black"
                placeholder={`${dictionary.form["phone"]}`}
              />
            </div>
            <div className=" col-span-full">
              <textarea
                {...register("message")}
                placeholder={`${dictionary.form["message"]}`}
                aria-invalid={errors.message ? "true" : "false"}
                className={cn(
                  "h-[200px]  w-full  border border-black p-2  text-black",
                  errors.message && "border-red-600",
                )}
              />
              {errors.message && (
                <div className="text-xs text-red-600">
                  {errors.message.message}
                </div>
              )}
            </div>
          </div>
          <input type="file" />
          <div
            className={cn(
              `mx-auto w-fit border text-xl tracking-widest `,
              teko.className,
            )}
          >
            <button
              type="submit"
              className="bg-red-500 px-4 py-2 uppercase text-white hover:opacity-70"
            >
              {`${dictionary.form["send"]}`}
            </button>
          </div>
        </form>
      </div>
      {/* <GoogleMapComp /> */}
    </div>
  );
};

export default FormComp;
