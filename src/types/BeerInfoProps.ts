import Beer from "./Beer";
export default interface BeerInfoProps {
  fetchData: (url: string) => Promise<Beer[]>;
}
