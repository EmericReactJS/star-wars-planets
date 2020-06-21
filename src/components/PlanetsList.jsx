import React from 'react';
import PropTypes from 'prop-types';
import PlanetsDetails from '../components/PlanetsDetails';

const PlanetsList = ({ planets }) => {
  return (
    <>
      <PlanetsDetails planets={planets} />
    </>
  );
};

PlanetsList.propTypes = {
  planets: PropTypes.array
};

export default PlanetsList;
