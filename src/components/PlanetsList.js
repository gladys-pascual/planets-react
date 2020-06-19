import React from 'react';
import PlanetCard from './PlanetCard'

const PlanetsList = (props) => {
  console.log('console logging:', props);
  return (
    <div className="PlanetsList">
      {props.planet.map(planet => <PlanetCard
        key={planet.id}
        {...planet} />)}
    </div>
  );
}

export default PlanetsList;