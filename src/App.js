import React from "react";
import "./App.css";
import PlanetsList from "./components/PlanetsList";
import planets from "./data";

const App = () => {
  return (
    <>
      <h1>Planets</h1>
      <PlanetsList planet={planets} />
    </>
  );
};

export default App;
