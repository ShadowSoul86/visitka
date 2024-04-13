import firstImg from "@/public/img/portfolio/first.png";
import secondImg from "@/public/img/portfolio/second.png";
import thirdImg from "@/public/img/portfolio/third.png";
import fourthImg from "@/public/img/portfolio/fourth.png";
import fifthImg from "@/public/img/portfolio/fifth.png";
import sixthImg from "@/public/img/portfolio/sixth.png";
import seventhImg from "@/public/img/portfolio/seventh.png";
import { useActions } from "@/redux/useActions";

export const usePortfolio = () => {
  const { openModal } = useActions();

  const data = [
    {
      image: firstImg,
      title: "Шатуш для перемен1",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
        {
          title: "Задачи",
          text: "Осветление волос, создание мягких переходов.",
        },
      ],
    },
    {
      image: secondImg,
      title: "Шатуш для перемен2",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
      ],
    },
    {
      image: thirdImg,
      title: "Шатуш для перемен2s",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
      ],
    },
    {
      image: fourthImg,
      title: "Шатуш для перемен3",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
      ],
    },
    {
      image: fifthImg,
      title: "Шатуш для перемен4",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
      ],
    },
    {
      image: sixthImg,
      title: "Шатуш для перемен5",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
      ],
    },
    {
      image: seventhImg,
      title: "Шатуш для перемен6",
      descr:
        "Элегантный шатуш с идеальными переходами, который подчеркивает индивидуальность клиента.",
      list: [
        {
          title: "Цель",
          text: "Создать стильный и утонченный образ с использованием техники шатуш.",
        },
      ],
    },
  ];

  return {
    data,
    openModal
  }
}