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
    <div>
      {beerData ? (
        <div>
          <aside>
            <img src={beerData[0].image_url} alt="Beer" />
          </aside>
          <main>
            <h3>{beerData[0].name}</h3>
            <p>Brewed in: {beerData[0].first_brewed}</p>
            <p>{beerData[0].description}</p>
          </main>
        </div>
      ) : null}
    </div>
  );
};
export default BeerInfo;
//  //<DescriptionLists data={beerData.ingredients, beerData.method } />
//beerInfoContainer
//<DescriptionLists
//data={beerData && (beerData[0].ingredients, beerData[0].method)}
///>
