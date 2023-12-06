import type { Metadata } from "next";
import { Inter, Teko, Open_Sans } from "next/font/google";
import "../globals.css";
import Header from "../components/header";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { GoogleMapsProvider } from "@/providers/google-maps-provider";
import Footer from "../components/footer";
import LangProvider from "@/providers/LangProvider";

//const inter = Inter({ subsets: ["latin"] });
const teko = Teko({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const openSans = Open_Sans({ subsets: ["latin"], display: "block" });

export const metadata: Metadata = {
  title: "Zone IT Clone",
  description:
    "Page created using Next.js and react as an alement of the recruitment process for Zone IT",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="overflow-x-hidden scroll-smooth">
      {/* <GoogleMapsProvider> */}
      <body
        className={cn(
          `overflow-x-hidden`,

          teko.className,
        )}
      >
        <LangProvider dictionary={dictionary} />
        <Header className={openSans.className} params={params} />
        <div className="pt-20">{children}</div>
        <Footer dictionary={dictionary} />
      </body>
      {/* </GoogleMapsProvider> */}
    </html>
  );
}
