import React from 'react';


const PlanetCard = (props) => {
  return (
    <div className="PlanetCard">
      <div>
        <img src={props.url} alt="name" />
      </div>
      <h2> {props.name}</h2>
      <p> {props.desc}</p>
      <h3>Planet Profile</h3>
      <ul>
        <li> Diameter: {props.diameter}</li>
        <li> Moons: {props.moons} </li>
      </ul>
    </div>
  );
}

export default PlanetCard;
