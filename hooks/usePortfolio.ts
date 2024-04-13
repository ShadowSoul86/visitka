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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
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
      slides: [
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          alt: "image1",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image2",
        },
        {
          name: "Александра Александровна",
          date: "10.02.2023",
          text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
          img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "image3",
        },
      ],
    },
  ];

  return {
    data,
    openModal,
  };
};
