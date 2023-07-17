import { create, StoreApi } from "zustand";
import StoreStateProps from "../types/StoreStateProps";
import Beer from "../types/Beer";

const useStore = create<StoreStateProps>(
  (set: StoreApi<StoreStateProps>["setState"]) => ({
    beers: [],
    readMoreId: null,
    selectedCardIds: [],
    setBeers: (beers: Beer[]) => set((state) => ({ ...state, beers })),
    setReadMoreId: (id: number | null) => {
      set((state) => ({ ...state, readMoreId: id }));
    },
    setSelectedCardIds: (cardIds: number[]) =>
      set((state) => ({ ...state, selectedCardIds: cardIds })),
  })
);

export default useStore;
