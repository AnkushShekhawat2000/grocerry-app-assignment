import { create } from "zustand";
import { PRODUCTS } from "../data/products";
import type { Product } from "../types/product";

interface ProductStore {
  products: Product[];
  search: string;

  setSearch: (value: string) => void;

  getProductById: (id: number) => Product | undefined;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: PRODUCTS,

  search: "",

  setSearch: (value) => set({ search: value }),

  getProductById: (id) =>
    get().products.find((item) => item.id === id),
}));