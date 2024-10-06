import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GlobalContextProvider } from "./context/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reers Podcasts",
  description: "Generate your podcasts on the fly with Reers",
};

const Britti = localFont({
  src: [
    {
      path: "../../public/Britti/britti-sans-extra-light.ttf",
      weight: "100",
    },
    {
      path: "../../public/Britti/britti-sans-extra-light.ttf",
      weight: "200",
    },
    {
      path: "../../public/Britti/britti-sans-light.ttf",
      weight: "300",
    },
    {
      path: "../../public/Britti/britti-sans-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/Britti/britti-sans-medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/Britti/britti-sans-semibold-italic.ttf",
      weight: "600",
    },
    {
      path: "../../public/Britti/britti-sans-bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/Britti/britti-sans-extra-bold.ttf",
      weight: "800",
    },
    {
      path: "../../public/Britti/britti-sans-extra-bold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-britti",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Britti.variable} font-britti `}>
   
        <GlobalContextProvider>
          {" "}
          <body className={inter.className}>{children}</body>{" "}
        </GlobalContextProvider>
      
    </html>
  );
}
