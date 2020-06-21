import React from 'react';
import PropTypes from 'prop-types';
import PlanetDetails from './PlanetDetails';

const PlanetsList = ({ planets }) => {
  return (
    <>
      <PlanetDetails planets={planets} />
    </>
  );
};

PlanetsList.propTypes = {
  planets: PropTypes.array
};

export default PlanetsList;
