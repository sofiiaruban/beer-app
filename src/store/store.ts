import { create, StoreApi } from "zustand";
import StoreStateProps from "../types/StoreStateProps";
import Beer from "../types/Beer";

const useStore = create<StoreStateProps>(
  (set: StoreApi<StoreStateProps>["setState"]) => ({
    beers: [],
    selectedBeerId: null,
    setBeers: (beers: Beer[]) => set((state) => ({ ...state, beers })),
    setSelectedBeerId: (id: number | null) => {
      set((state) => ({ ...state, selectedBeerId: id }));
    },
  })
);

export default useStore;
