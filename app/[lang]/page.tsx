import Hero from "../components/hero";
import Link from "next/link";
import { cn } from "@/lib/utils";
import InViewComp from "../components/in-view";
import { Open_Sans } from "next/font/google";
import Offers from "../components/offers";
import CooperationModels from "../components/cooperation-models";
import ZoneitInNumbers from "../components/zoneit-in-numbers";
import OpenPopupWrapper from "../components/open-popup-wrapper";
import { getDictionary } from "@/lib/dictionary";

import { Locale } from "@/i18n.config";

const openSans = Open_Sans({ subsets: ["latin"], display: "block" });

type Props = {
  params: { lang: Locale };
};
export default async function Home({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  return (
    <main>
      <InViewComp activeLink="">
        <Hero dictionary={dictionary} lang={params.lang} />{" "}
      </InViewComp>
      <div>
        <InViewComp activeLink="about-us">
          <div className="flex flex-col items-center justify-center gap-12 py-20 text-4xl">
            <h1 className="max-w-[850px]  p-4  text-center text-5xl sm:px-20">
              {`${dictionary["about-us"].title}`}
            </h1>
            <OpenPopupWrapper>
              <button
                className={cn(
                  `z-20 inline-block  cursor-pointer border-2 border-black  px-[40px] py-[10px] text-xl uppercase  transition-all
              duration-1000 hover:border-zinc-400  hover:bg-zinc-400 `,
                )}
                // href={"/#about-us"}
              >
                <span className="inline-block w-fit uppercase">
                  {`${dictionary["read-more"]}`}
                  {/* Czytaj więcej */}
                </span>
              </button>
            </OpenPopupWrapper>
          </div>
        </InViewComp>
      </div>

      <InViewComp activeLink="services">
        <Offers dictionary={dictionary} />
      </InViewComp>
      <InViewComp activeLink="carrier">
        <div className=" flex flex-col items-center justify-center gap-10 bg-[url('/images/bg-send.jpg')] bg-cover bg-center bg-no-repeat p-4 pb-20 pt-8  text-white ">
          <h1 className="  text-5xl uppercase">
            {`${dictionary.jobs.title}`}{" "}
          </h1>
          <p className={cn("text-xl text-neutral-300", openSans.className)}>
            {`${dictionary.jobs.description}`}
          </p>
          <Link
            className={cn(
              `z-20 inline-block cursor-pointer border-2 border-white  px-[40px] py-[10px] text-xl uppercase  transition-all
            duration-1000 hover:border-zinc-400  hover:bg-zinc-400 `,
            )}
            href={`/${params.lang}/contact`}
          >
            <span className="uppercase tracking-widest">
              {`${dictionary.jobs["fill-form"]}`}
            </span>
          </Link>
        </div>
      </InViewComp>

      <CooperationModels dictionary={dictionary} />
      <ZoneitInNumbers dictionary={dictionary} />
    </main>
  );
}
