//import DescriptionLists from "../components/DescriptionLists";
import useStore from "../store/store";
import Beer from "../types/Beer";
import BeerInfoProps from "../types/BeerInfoProps";
import { useQuery } from "react-query";

const BeerInfo: React.FC<BeerInfoProps> = ({ fetchData }) => {
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
  const selectedBeerId = useStore.getState().selectedBeerId;
  const {
    isLoading: isLoadingBeer,
    error: errorBeer,
    data: beerData,
  } = useQuery<Beer[], Error>("beer", () =>
    fetchData(`${BASE_URL}/${selectedBeerId}`)
  );

  if (isLoadingBeer) return <div>Loading...</div>;

  if (errorBeer) return <div>Oops, something went wrong...</div>;

  return (
    <>
      {beerData && JSON.stringify(beerData)}
    </>
  );
};
export default BeerInfo;
//  //<DescriptionLists data={beerData.ingredients, beerData.method } />
