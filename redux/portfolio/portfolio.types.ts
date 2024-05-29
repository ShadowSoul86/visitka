export type portfolioCard = {
  id: number;
  title: string;
  description: string;
  goal: string;
  tasks: string;
  products_and_methods: string;
  process: string;
  images: [
    {
      id: number;
      image: string;
    }
  ];
  type: string;
};
