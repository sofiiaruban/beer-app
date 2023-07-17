import Beer from "./Beer";

export default interface StoreStateProps {
  beers: Beer[];
  setBeers: (beers: Beer[]) => void;
  readMoreId: number | null;
  setReadMoreId: (id: number | null) => void;
  selectedCardIds: number[];
  setSelectedCardIds: (cardIds: number[]) => void;
}
