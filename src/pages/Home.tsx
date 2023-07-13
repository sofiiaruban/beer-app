import styles from "./Home.module.css";
import BeerIcon from "../assets/beer-icon.svg";
import HomeProps from "../types/types";

const Home: React.FC<HomeProps> = (beers) => {
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
      <main></main>
    </>
  );
};
export default Home;
