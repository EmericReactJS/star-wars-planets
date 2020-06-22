import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { Radar } from 'react-chartjs-2';
import buildDataSets from '../services/buildDataSets';

const styles = css`
  .chart-radar {
    width: 480px;
    position: fixed;
    top: 128px;
    right: 128px;
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
    }
  };
  return (
    <>
      <div className="chart-radar">
        <Radar
          data={data}
          width={960}
          height={480}
          options={{ ...options, maintainAspectRatio: false }}
        />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

RadarChart.propTypes = {
  selectedPlanets: PropTypes.array
};

export default RadarChart;
