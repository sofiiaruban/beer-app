import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Beer from "./types/types";

const fetchData = async (url: string): Promise<Array<string> | Array<Beer>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beerinfo" element={<BeerInfo />} />
    </Routes>
  );
};

export default App;
