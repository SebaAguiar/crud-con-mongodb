import { create } from 'zustand';
import { IProducts } from '../types';

interface IProductsState {
  products: IProducts[] | [];
  productsCopy: IProducts[] | [];
  setProducts: (product: IProducts[]) => void;
  filter: (name: string) => void;
}

export const useStore = create<IProductsState>((set) => ({
  products: [],
  productsCopy: [],
  setProducts: (products: IProducts[]) =>
    set(() => ({ products: products, productsCopy: products })),
  filter: (name: string) =>
    set((state) => ({
      products: state.productsCopy.filter((product) =>
        product.name.includes(name),
      ),
    })),
}));
