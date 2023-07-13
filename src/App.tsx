import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beerinfo" element={<BeerInfo />} />
    </Routes>
  );
};

export default App;
