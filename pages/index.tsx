import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Registry from "@/components/Registry/Registry";
import Reviews from "@/components/Reviews/Reviews";
import Serve from "@/components/Serve/Serve";
import BgImage from "@/public/img/mainBg.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-[180px] w-full mx-auto max-w-[300px] phone:max-w-[400px] mini:max-w-[516px] md:max-w-[688px] pad:max-w-[910px] mac:max-w-[1386px] full:max-w-[1680px]">
        <header className="pt-8 min-h-[416px] mini:min-h-[482px] md:min-h-[593px] pad:min-h-[900px] 2xl:min-h-[1080px]">
          <Header />

          <Image
            className="absolute top-0 right-0 z-[-1] w-[274px] h-[416px] mini:w-[367px] mini:h-[482px] md:w-[482px] md:h-[593px] pad:w-[733px] pad:h-[900px] 2xl:w-[930px] 2xl:h-[1080px]"
            width={274}
            height={416}
            src={BgImage}
            alt="bg"
          />
        </header>

        <main className="flex flex-col gap-[180px]">
          <About />
          <Portfolio />
          <Serve />
          <Registry />
          <Reviews />
        </main>
      </div>

      <footer className="bg-my-light mt-[180px]">
        <div className="w-full mx-auto max-w-[300px] phone:max-w-[400px] mini:max-w-[516px] md:max-w-[688px] pad:max-w-[910px] mac:max-w-[1386px] full:max-w-[1680px]">
          <Contacts />
        </div>
      </footer>
    </div>
  );
}
