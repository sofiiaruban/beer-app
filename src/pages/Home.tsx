import styles from "./Home.module.css";
import BeerIcon from "../assets/beer-icon.svg";

const Home = () => {
  return (
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
  );
};
export default Home;
