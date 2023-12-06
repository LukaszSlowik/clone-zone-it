import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { LuChevronDown } from "react-icons/lu";
import Navbar from "./navbar";
import LocalSwitcher from "./local-switcher";
import ComponentWithNoSSR from "./navbarClient";
type Props = {
  className?: string;
  params: { lang: Locale };
  //links: { href: string; label: string }[];
};

const Header = async ({ className, params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  const links = [
    { href: `/${params.lang}`, label: dictionary.navigation.home },
    {
      href: `/${params.lang}#about-us`,
      label: dictionary.navigation["about-us"],
    },
    {
      href: `/${params.lang}#services`,
      label: dictionary.navigation.services,
    },
    { href: `/${params.lang}#carrier`, label: dictionary.navigation.carrier },
    { href: `/${params.lang}/contact`, label: dictionary.navigation.contact },
  ];

  const headersList = headers();
  const domain = headersList.get("host") || "";

  const fullUrl = headersList.get("referer") || "";

  console.log(fullUrl);
  return (
    <header className="fixed inset-0  z-[999] h-20  bg-white  shadow-md">
      <div className="flex h-full   items-center justify-between  px-[2.5%] sm:mx-auto">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/images/zoneit-logotyp.png"
            alt="logo"
            width={100}
            height={27}
            priority
          />
          <span>(Clone)</span>
        </div>
        <div className="flex gap-4 self-stretch">
          <ComponentWithNoSSR links={links} className={className} />
          <LocalSwitcher lang={params.lang} className={className} />
        </div>
      </div>
    </header>
  );
};

export default Header;
