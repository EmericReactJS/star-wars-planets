import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { colors, fonts } from '../common/Theme';
import { Radar } from 'react-chartjs-2';
import buildDataSets from '../services/buildDataSets';
import RadarIcon from '../assets/icons/atom_icon_radar.svg';

const styles = css`
  .chart-radar {
    width: 320px;
    position: fixed;
    top: 128px;
    right: 0px;
    text-align: center;
    font-family: ${fonts.primaryFont};
    color: ${colors.swpPrimaryOrange};
  }
  @media (min-width: 840px) {
    .chart-radar {
      width: 400px;
    }
  }
  @media (min-width: 1360px) {
    .chart-radar {
      width: 480px;
      right: 240px;
    }
  }
`;

const RadarChart = ({ selectedPlanets }) => {
  const data = {
    labels: [
      'Période de rotation',
      'Période orbital',
      'Diamètre',
      'Gravité',
      'Eau en surface',
      'Population'
    ],
    datasets: buildDataSets(selectedPlanets)
  };
  const options = {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Star Wars Planets Radar Chart'
    },
    ticks: {
      beginAtZero: true,
      min: 1,
      max: 100,
      stepSize: 1000
    },
    scale: {
      angleLines: {
        color: colors.swpLightOrange
      },
      gridLines: {
        color: colors.swpGrey
      }
    }
  };
  return (
    <>
      <div className="chart-radar">
        {selectedPlanets.length > 0 ? (
          <Radar
            data={data}
            width={840}
            height={560}
            options={{ ...options, maintainAspectRatio: false }}
          />
        ) : (
          <h2>
            Cliquer sur <RadarIcon /> pour ajouter une planète au graphique:
          </h2>
        )}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

RadarChart.propTypes = {
  selectedPlanets: PropTypes.array
};

export default RadarChart;
