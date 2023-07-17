import BeerCardProps from "../types/BeerCardProps";
import styles from "./BeerCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

const BeerCard: React.FC<BeerCardProps> = ({
  id,
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
  const [isSelected, setIsSelected] = useState(false);
  const setSelectedCardIds = useStore((state) => state.setSelectedCardIds);
  const selectedCardIds = useStore((state) => state.selectedCardIds);
  const setId = useStore((state) => state.setReadMoreId);

  const handleClickReadMoreButton = () => {
    setId(id);
  };
  const handleClick = () => {
    if (selectedCardIds.includes(id)) {
      setSelectedCardIds(selectedCardIds.filter((cardId) => cardId !== id));
    } else {
      setSelectedCardIds([...selectedCardIds, id]);
    }
    setIsSelected(!isSelected);
  };
  return (
    <li
      className={`${styles.beerCard} ${isSelected ? styles.selected : null}`}
      onClick={handleClick}
    >
      <img src={img} alt="Beer" className={styles.beerCardImg} />
      <h2 className={styles.beerCardTitle}>{name}</h2>
      <p className={styles.beerCardTagline}>{modifiedTagline}</p>
      <p className={styles.beerCardBrewedIn}>Brewed in: {brewedIn}</p>
      <h5 className={styles.beerCardPH}>pH: {pH}</h5>
      <h5 className={styles.beerCardABV}>ABV: {alcByVol}</h5>
      <Link to={`/beerinfo/${id}`} onClick={handleClickReadMoreButton}>
        <button className={styles.beerCardBtn}>Read more</button>
      </Link>
    </li>
  );
};
export default BeerCard;
