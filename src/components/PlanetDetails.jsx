import React from 'react';
import css from 'styled-jsx/css';
import { colors, fonts } from '../common/Theme';
import PropTypes from 'prop-types';

const styles = css`
  .detail-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hidden-detail-list {
    display: none;
  }
  .description-title {
    font-family: ${fonts.primaryFont};
    font-weight: 400;
    font-size: 17px;
    color: ${colors.swpLightBlue};
  }
  .description {
    font-family: ${fonts.primaryFont};
    font-weight: 400;
    font-size: 17px;
    color: ${colors.swpPrimaryBlue};
    margin: 0;
  }
`;

const PlanetDetails = ({ planet, showDetails }) => {
  return (
    <>
      <dl className={!showDetails ? 'hidden-detail-list' : 'detail-list'}>
        <dt className="description-title">Nom:</dt>
        <dd className="description">{planet.name}</dd>
        <dt className="description-title">Climat:</dt>
        <dd className="description">{planet.climate}</dd>
        <dt className="description-title">Gravité:</dt>
        <dd className="description">{planet.gravity}</dd>
        <dt className="description-title">
          Période orbital en nombres de jours:
        </dt>
        <dd className="description">{planet.orbital_period}</dd>
        <dt className="description-title">
          Rotation en nombres d&apos;heures:
        </dt>
        <dd className="description">{planet.rotation_period}</dd>
        <dt className="description-title">
          Pourcentage d&apos;eau en surface:
        </dt>
        <dd className="description">{planet.surface_water}</dd>
        <dt className="description-title">Types de Terrain:</dt>
        <dd className="description">{planet.terrain}</dd>
        <dt className="description-title">Total de population:</dt>
        <dd className="description">{planet.population}</dd>
        <dt className="description-title">
          Nombre de personnages habitant sur la planète:
        </dt>
        <dd className="description">{planet.residents.length}</dd>
        <dt className="description-title">
          Nombre de films où la planète apparaît:
        </dt>
        <dd className="description">{planet.films.length}</dd>
      </dl>
      <style jsx>{styles}</style>
    </>
  );
};

PlanetDetails.propTypes = {
  planet: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired
};

export default PlanetDetails;
