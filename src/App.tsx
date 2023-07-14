import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Beer from "./types/Beer";
import { useQuery } from "react-query";

const fetchData = async (url: string): Promise<Array<Beer>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const App: React.FC = () => {
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
  const {
    isLoading: isLoadingBeers,
    error: errorBeers,
    data: beersData,
  } = useQuery<Array<Beer>>("beers", () =>
    fetchData(`${BASE_URL}?page=1&per_page=15`)
  );

  if (isLoadingBeers) return <div>Loading...</div>;

  if (errorBeers) return <div>Oops, something went wrong...</div>;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home beers={beersData} fetchData={fetchData} />}
        />
        <Route path="/beerinfo" element={<BeerInfo />} />
      </Routes>
    </>
  );
};

export default App;
