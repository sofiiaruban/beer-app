import Beer from "./Beer";
export default interface HomeProps {
  beers?: Beer[];
  fetchData: (url: string) => Promise<Beer[]>;
}
