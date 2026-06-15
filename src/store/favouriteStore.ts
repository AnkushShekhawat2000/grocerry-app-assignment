import { create } from "zustand";

interface FavouriteState {
  favouriteIds: number[];

  addFavourite: (id: number) => void;

  removeFavourite: (id: number) => void;

  isFavourite: (id: number) => boolean;
}

export const useFavouriteStore =
  create<FavouriteState>((set, get) => ({
    favouriteIds: [],

    addFavourite: (id) =>
      set((state) => ({
        favouriteIds: [...state.favouriteIds, id],
      })),

    removeFavourite: (id) =>
      set((state) => ({
        favouriteIds:
          state.favouriteIds.filter(
            (item) => item !== id
          ),
      })),

    isFavourite: (id) =>
      get().favouriteIds.includes(id),
  }));