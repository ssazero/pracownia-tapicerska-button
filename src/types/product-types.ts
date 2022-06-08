export interface IProduct {
  title: string;
  slug: string;
  imgs: string[];
  description: string;
  materials: string[];
  size: string;
}

export interface IProductList {
  products: IProduct[];
}
