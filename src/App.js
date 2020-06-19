import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlanetsList from './components/PlanetsList';
import planets from './data'

const App = () => {
  return (
    <>
      <h1>Planets</h1>
      <PlanetsList planet={planets} />
    </>
  );
}

export default App;
