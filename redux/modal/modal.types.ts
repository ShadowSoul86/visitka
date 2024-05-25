export type listItemType = {
  title: string;
  text: string;
};

export type slideType = {
  name: string;
  date: string;
  text: string;
  img: string;
  alt: string;
};

export type modalDataType = {
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
};
