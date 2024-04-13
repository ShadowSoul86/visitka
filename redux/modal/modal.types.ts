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
  image: string | null;
  title: string;
  descr: string;
  list: listItemType[];
  slides: slideType[];
};
