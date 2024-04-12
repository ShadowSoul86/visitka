import Image from "next/image";
import mainPhoto from "@/public/img/mainPhoto.png";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const kurier = localFont({
  src: [
    {
      path: "../../public/fonts/KurierLight-Regular.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Kurier-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kurier-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-kurier",
});

const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="max-w-[260px] medium:max-w-[386px] pad:max-w-[467px] megapad:max-w-[600px] mac:max-w-[772px]">
        <h2
          className={`${kurier.variable} default-h2`}
        >
          Обо мне
        </h2>
        <div
          className={`${inter.className} about-text`}
        >
          Меня зовут Алёна, и я являюсь профессиональным стилистом,
          специализирующимся на самых сложных и инновационных методах ухода
          за волосами. Моя страсть — создавать удивительные образы, улучшать
          качество волос и придавать им неповторимый стиль. С [X] лет опыта
          и множеством сертификатов в области красоты, я могу предложить
          вам широкий спектр услуг.
        </div>
      </div>

      <div>
        <Image className="about-img" src={mainPhoto} alt="user" />
      </div>
    </div>
  );
};
export default About;
