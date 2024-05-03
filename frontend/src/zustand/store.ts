import { create } from 'zustand';
import { IProducts } from '../types';

interface IProductsState {
  products: IProducts[] | [];
  productsCopy: IProducts[] | [];
  totalProducts: number;
  filteredTotalProducts: number;
  actualPage: number | 1;
  totalPages: number;
  prevPage: boolean;
  nextPage: boolean;
  setProducts: (products: IProducts[]) => void;
  filterProductsByName: (products: IProducts[]) => void;
  setActualPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  setHasNextPage: (page: number | null) => void;
  setPrevPage: (page: number | null) => void;
  setTotalProducts: (total: number) => void;
  setFilteredTotalProducts: (total: number) => void;
}

export const useStore = create<IProductsState>((set) => ({
  products: [],
  productsCopy: [],
  actualPage: 1,
  totalPages: 1,
  prevPage: false,
  nextPage: false,
  totalProducts: 0,
  filteredTotalProducts: 0,

  setProducts: (products: IProducts[]) =>
    set(() => ({ products: products, productsCopy: products })),
  filterProductsByName: (products: IProducts[]) =>
    set(() => ({ products: products })),
  setActualPage: (page: number) => set(() => ({ actualPage: page })),
  setTotalPages: (total: number) => set(() => ({ totalPages: total })),
  setHasNextPage: (page: number | null) =>
    set(() => ({ nextPage: typeof page === 'number' })),
  setPrevPage: (page: number | null) =>
    set(() => ({ prevPage: typeof page === 'number' })),
  setTotalProducts: (total: number) => set(() => ({ totalProducts: total })),
  setFilteredTotalProducts: (total: number) =>
    set(() => ({ filteredTotalProducts: total })),
}));
