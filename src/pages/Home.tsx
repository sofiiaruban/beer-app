import styles from "./Home.module.css";
import BeerIcon from "../assets/beer-icon.svg";
import HomeProps from "../types/HomeProps";
import BeerCard from "../components/BeerCard";
import TrashCanImg from "../assets/trash-can-icon.svg";
import useStore from "../store/store";
import Beer from "../types/Beer";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const Home: React.FC<HomeProps> = ({ fetchData }) => {
  const selectedCardIds = useStore((state) => state.selectedCardIds);
  const setSelectedCardIds = useStore((state) => state.setSelectedCardIds);
  const setBeers = useStore((state) => state.setBeers);
  const beers = useStore((state) => state.beers);
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
  const BEERS_PER_PAGE: number = 15;
  const [page, setPage] = useState<number>(1);

  const fetchBeers = () =>
    fetchData(`${BASE_URL}?page=${page}&per_page=${BEERS_PER_PAGE}`);

  const {
    isLoading: isLoadingBeers,
    error: errorBeers,
    data: fetchedBeersData,
    refetch: refetchBeersData,
  } = useQuery<Array<Beer>>(["beers", page], fetchBeers);

  useEffect(() => {
    if (fetchedBeersData) {
      setBeers(fetchedBeersData);
    }
  }, [fetchedBeersData, setBeers, page]);

  const handleDeleteSelectedBeers = async () => {
    if (beers) {
      const updatedBeers = beers.filter(
        (beer) => !selectedCardIds.includes(beer.id)
      );
      setBeers(updatedBeers);
      setSelectedCardIds([]);
      if (beers.length === BEERS_PER_PAGE) {
        setPage((prevPage) => prevPage + 1);
      } else {
        await refetchBeersData();
      }
    }
  };

  if (isLoadingBeers) return <div>Loading...</div>;

  if (errorBeers) return <div>Oops, something went wrong...</div>;
  return (
    <>
      <header className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>
          All of your favorite beers. <br />
          All in one place
          <img
            className={styles.homeIcon}
            src={BeerIcon}
            alt="Cheering beer glasses"
          />
        </h1>
      </header>
      <main className={styles.homeMain}>
        <ul className={styles.beerList}>
          {beers
            ? beers.map((beer) => (
                <BeerCard
                  id={beer.id}
                  key={beer.id}
                  name={beer.name}
                  img={beer.image_url}
                  tagline={beer.tagline}
                  brewedIn={beer.first_brewed}
                  pH={beer.ph}
                  alcByVol={beer.abv}
                />
              ))
            : null}
        </ul>
        {selectedCardIds.length ? (
          <img
            src={TrashCanImg}
            alt="Trash Can"
            className={styles.homeTrashCanIcon}
            onClick={handleDeleteSelectedBeers}
          />
        ) : null}
      </main>
    </>
  );
};
export default Home;
