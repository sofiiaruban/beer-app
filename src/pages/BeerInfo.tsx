import useStore from "../store/store";
import Beer from "../types/Beer";
import BeerInfoProps from "../types/BeerInfoProps";
import { useQuery } from "react-query";
import styles from "./BeerInfo.module.css";
import BackBtn from "../assets/arrow-icon.svg";
import { Link } from "react-router-dom";

const BeerInfo: React.FC<BeerInfoProps> = ({ fetchData }) => {
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
  const selectedBeerId = useStore.getState().readMoreId;
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
      {beerData ? (
        <div className={styles.beerInfoContainer}>
          <aside className={styles.beerInfoAside}>
            <Link to="/">
              <img
                src={BackBtn}
                alt="Arrow"
                className={styles.beerInfoBackBtn}
              />
            </Link>
            <img
              src={beerData[0].image_url}
              alt="Beer"
              className={styles.beerInfoImg}
            />
          </aside>
          <main className={styles.beerInfoMain}>
            <h3>{beerData[0].name}</h3>
            <p>
              <b>Brewed in:</b> {beerData[0].first_brewed}
            </p>
            <p className={styles.beerInfoDescription}>
              {beerData[0].description}
            </p>
            <p className={styles.textAlign}>
              <b>Brewers tips:</b> {beerData[0].brewers_tips}
            </p>
            <p className={styles.textAlign}>
              <b>Food pairing:</b> {beerData[0].food_pairing}
            </p>
          </main>
        </div>
      ) : null}
    </>
  );
};
export default BeerInfo;
