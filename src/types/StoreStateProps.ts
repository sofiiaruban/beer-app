import Beer from "./Beer";

export default interface StoreStateProps {
  beers: Beer[];
  setBeers: (beers: Beer[]) => void;
}
