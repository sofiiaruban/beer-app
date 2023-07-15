import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Beer from "./types/Beer";
import { useQuery } from "react-query";
import useStore from "./store/store";
import { useEffect } from "react";

const fetchData = async (url: string): Promise<Array<Beer>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const App: React.FC = () => {
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
  const BEERS_PER_PAGE: number = 15;

  const {
    isLoading: isLoadingBeers,
    error: errorBeers,
    data: beersData,
  } = useQuery<Array<Beer>>("beers", () =>
    fetchData(`${BASE_URL}?page=1&per_page=${BEERS_PER_PAGE}`)
  );

  const setBeers = useStore((state) => state.setBeers);

  useEffect(() => {
    if (beersData) {
      setBeers(beersData);
    }
  }, [beersData, setBeers]);

  if (isLoadingBeers) return <div>Loading...</div>;

  if (errorBeers) return <div>Oops, something went wrong...</div>;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home beers={beersData} />} />
        <Route path="/beerinfo" element={<BeerInfo fetchData={fetchData} />} />
      </Routes>
    </>
  );
};

export default App;
