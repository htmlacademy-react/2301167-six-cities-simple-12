export type User = {
  id: number;
  isPro: boolean;
  avatar: {
    src: string;
    alt: string;
  };
  name: string;
};
