import styles from "./Home.module.css";
import BeerIcon from "../assets/beer-icon.svg";
import HomeProps from "../types/HomeProps";
import BeerCard from "../components/BeerCard";

const Home: React.FC<HomeProps> = ({ beers }) => {
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
      <main>
        <ul className={styles.beerList}>
          {beers
            ? beers.map((beer) => (
                <BeerCard
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
      </main>
    </>
  );
};
export default Home;
