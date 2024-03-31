export type listItemType = {
  title: string;
  text: string;
};

export type modalDataType = {
  image: string | null;
  title: string;
  descr: string;
  list: listItemType[];
};
