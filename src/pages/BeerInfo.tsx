import DescriptionLists from "../components/DescriptionLists";
import BeerInfoProps from "../types/BeerInfoProps";

const BeerInfo: React.FC<BeerInfoProps> = () => {
  const ingredients = {
    malt: [
      {
        name: "Maris Otter Extra Pale",
        amount: {
          value: 3.3,
          unit: "kilograms",
        },
      },
      {
        name: "Caramalt",
        amount: {
          value: 0.2,
          unit: "kilograms",
        },
      },
      {
        name: "Munich",
        amount: {
          value: 0.4,
          unit: "kilograms",
        },
      },
    ],
    hops: [
      {
        name: "Fuggles",
        amount: {
          value: 25,
          unit: "grams",
        },
        add: "start",
        attribute: "bitter",
      },
      // Other hops items...
    ],
    yeast: "Wyeast 1056 - American Ale™",
  };
  const method = {
    mash_temp: [
      {
        temp: {
          value: 64,
          unit: "celsius",
        },
        duration: 75,
      },
    ],
    fermentation: {
      temp: {
        value: 19,
        unit: "celsius",
      },
    },
    twist: null,
  };

  return (
    <>
      <DescriptionLists data={{ ingredients, method }} />
    </>
  );
};
export default BeerInfo;
