export interface IProduct {
  title: string;
  slug: string;
  img: string;
  description: string;
  materials: string[];
}

export interface IProductList {
  products: IProduct[];
}
