import BeerCardProps from "../types/types";
import styles from "./BeerCard.module.css";

const BeerCard: React.FC<BeerCardProps> = ({
  name,
  img,
  tagline,
  brewedIn,
  pH,
  alcByVol,
}) => {
  return (
    <article className={styles.beerCard}>
      <img src={img} alt="Beer" />
      <h2>{name}</h2>
      <p>{tagline}</p>
      <p>Brewed in:{brewedIn}</p>
      <h5>pH: {pH}</h5>
      <h5>Abv: {alcByVol}</h5>
    </article>
  );
};
export default BeerCard;
