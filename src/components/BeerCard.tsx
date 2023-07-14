import BeerCardProps from "../types/BeerCardProps";
import styles from "./BeerCard.module.css";

const BeerCard: React.FC<BeerCardProps> = ({
  name,
  img,
  tagline,
  brewedIn,
  pH,
  alcByVol,
}) => {
  const modifiedTagline = tagline.endsWith(".")
    ? tagline.slice(0, -1)
    : tagline;
  return (
    <>
      <img src={img} alt="Beer" className={styles.beerCardImg} />
      <h2 className={styles.BeerCardTitle}>{name}</h2>
      <p className={styles.BeerCardTagline}>{modifiedTagline}</p>
      <p className={styles.BeerCardBrewedIn}>Brewed in: {brewedIn}</p>
      <h5 className={styles.BeerCardPH}>pH: {pH}</h5>
      <h5 className={styles.BeerCardABV}>Abv: {alcByVol}</h5>
    </>
  );
};
export default BeerCard;
