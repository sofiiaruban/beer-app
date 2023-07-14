import styles from "./Home.module.css";
import BeerIcon from "../assets/beer-icon.svg";
import HomeProps from "../types/HomeProps";
import BeerCard from "../components/BeerCard";

const Home: React.FC<HomeProps> = ({ beers, fetchData }) => {
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
        <ul>
          {beers
            ? beers.map((beer) => (
                <li key={beer.id}>
                  <BeerCard
                    name={beer.name}
                    img={beer.image_url}
                    tagline={beer.tagline}
                    brewedIn={beer.first_brewed}
                    pH={beer.ph}
                    alcByVol={beer.abv}
                  />
                </li>
              ))
            : null}
        </ul>
      </main>
    </>
  );
};
export default Home;
