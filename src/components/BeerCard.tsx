import BeerCardProps from "../types/BeerCardProps";
import styles from "./BeerCard.module.css";
import TrashCanImg from "../assets/trash-can-icon.svg";
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
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const setId = useStore((state) => state.setSelectedBeerId);

  const handleClick = () => {
    setId(id);
  };
  return (
    <Link to={`/beerinfo/${id}`} onClick={handleClick}>
      <li
        className={styles.beerCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={img} alt="Beer" className={styles.beerCardImg} />
        <h2 className={styles.beerCardTitle}>{name}</h2>
        <p className={styles.beerCardTagline}>{modifiedTagline}</p>
        <p className={styles.beerCardBrewedIn}>Brewed in: {brewedIn}</p>
        <h5 className={styles.beerCardPH}>pH: {pH}</h5>
        <h5 className={styles.beerCardABV}>Abv: {alcByVol}</h5>
        {isHovered ? (
          <img
            src={TrashCanImg}
            alt="Trash Can"
            className={styles.beerCardTrashCanIcon}
          />
        ) : null}
      </li>
    </Link>
  );
};
export default BeerCard;
