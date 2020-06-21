import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetDetails from './PlanetDetails';

const PlanetsList = ({ planets }) => {
  const [details, showDetails] = useState(false);
  return (
    <>
      <ul>
        {planets.map((planet) => {
          return (
            <li key={planet.name}>
              <h1>{planet.name}</h1>
              <button onClick={() => showDetails(!details)}>+</button>
              {/* wrap in Csstransisiton */}
              <PlanetDetails planet={planet} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

PlanetsList.propTypes = {
  planets: PropTypes.array
};

export default PlanetsList;
