export interface IProduct {
  title: string;
  slug: string;
  img: string;
  description: string;
  materials: string[];
  size: string;
}

export interface IProductList {
  products: IProduct[];
}
