import Beer from "./Beer";
export default interface HomeProps {
  fetchData: (url: string) => Promise<Beer[]>;
}
