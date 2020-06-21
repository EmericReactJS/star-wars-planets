import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PlanetDetails = ({ planet }) => {
  return (
    <>
      <ul>
        <li>{planet.name}</li>
        <li>{planet.diameter}</li>
      </ul>
    </>
  );
};

PlanetDetails.propTypes = {
  planet: PropTypes.object
};

export default PlanetDetails;
