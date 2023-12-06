"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ButtonDown from "./button-down";
import { useDictionary } from "@/store/local-store";
import { DictionaryType } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const Hero = ({ dictionary, lang }: Props) => {
  //const dictionary = useDictionary();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log("loaded:", container);
    },
    [],
  );
  //if (!dictionary) return null;

  return (
    <>
      <div className="relative flex h-[calc(100vh-5rem)] flex-col items-center  justify-evenly border bg-[url('/images/home2.jpg')] bg-cover bg-center bg-no-repeat pt-20">
        <h1
          className={cn(
            "font z-20 text-center text-4xl uppercase leading-[87px] text-[#ff0000] lg:text-7xl",
          )}
        >
          Because it is never just a businnes
        </h1>

        <Link
          className={cn(
            `z-20 inline-block cursor-pointer border-2 border-red-400  px-[40px] py-[10px] text-xl uppercase text-red-500 transition-all
            duration-1000 hover:border-zinc-400  hover:bg-zinc-400 `,
          )}
          href={`/${lang}/contact`}
        >
          <span className="">{`${dictionary?.["contact-us"]}`}</span>
        </Link>

        <ButtonDown />
        <Particles
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          // id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: "#000000",
            //   },
            // },
            fullScreen: {
              enable: false,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000",
              },
              links: {
                color: "#000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </div>
    </>
  );
};

export default Hero;
