import { Montserrat } from "@next/font/google";
import localFont from "@next/font/local";

const nicoMoji = localFont({
  src: "/fonts/NicoMoji-Regular.woff2",
  variable: "--font-nico-moji",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const fonts = {
  montserrat,
  nicoMoji,
};
