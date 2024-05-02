export interface IProductDTO {
  name: string;
  description: string;
  image: string;
  cost: number;
}

export interface IProduct extends IProductDTO {
  _id: string;
}
