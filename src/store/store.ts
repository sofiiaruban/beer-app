import { create, StoreApi } from "zustand";
import StoreStateProps from "../types/StoreStateProps";
import Beer from "../types/Beer";

const useStore = create<StoreStateProps>(
  (set: StoreApi<StoreStateProps>["setState"]) => ({
    beers: [],
    setBeers: (beers: Beer[]) => set((state) => ({ ...state, beers })),
  })
);

export default useStore;
