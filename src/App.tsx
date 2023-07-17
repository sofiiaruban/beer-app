import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Beer from "./types/Beer";

const fetchData = async (url: string): Promise<Array<Beer>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home fetchData={fetchData} />} />
        <Route
          path="/beerinfo/:id"
          element={<BeerInfo fetchData={fetchData} />}
        />
      </Routes>
    </>
  );
};

export default App;
