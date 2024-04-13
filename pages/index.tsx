import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Registry from "@/components/Registry/Registry";
import Reviews from "@/components/Reviews/Reviews";
import Serve from "@/components/Serve/Serve";
import BgImage from "@/public/img/mainBg.png";
import Image from "next/image";

import Modal from "@/components/Modals/Modal";
import Politics from "@/components/Politics/Politics";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const kurier = localFont({
  src: [
    {
      path: "../public/fonts/KurierLight-Regular.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Kurier-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Kurier-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-kurier",
});

export default function Home() {
  return (
    <div
      style={inter.style}
      className={`${kurier.variable} font-sans min-h-screen`}
    >
      <Modal />
      <div className="body-main">
        <header className="header">
          <Header />

          <Image
            className="bg-img"
            width={274}
            height={416}
            src={BgImage}
            alt="bg"
          />
        </header>

        <main className="flex flex-col gap-[140px]">
          <About />
          <Portfolio />
          <Serve />
          <Registry />
          <div className="hidden medium:block">
            <Reviews />
          </div>
        </main>
      </div>

      <footer className="bg-my-light mt-[140px]">
        <div className="footer-inner">
          <Contacts />
          <Politics />
        </div>
      </footer>
    </div>
  );
}
