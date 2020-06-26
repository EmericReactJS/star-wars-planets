import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import css from 'styled-jsx/css';
import SearchBar from './components/SearchBar';
import PlanetsList from './components/PlanetsList';
import RadarChart from './components/RadarChart';
import fetchPlanets from './services/api/fetchPlanets';

const styles = css`
  .app {
    max-width: 1200px;
    margin: 0 auto;
  }
  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 480px;
    margin: 36px;
  }
`;

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets()
      .then((planets) => setPlanets(planets))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setPlanetName(value);
    if (value !== '') {
      const filtered = planets.filter((planet) => {
        return planet.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredPlanets(filtered);
    } else {
      setFilteredPlanets(planets);
    }
  };

  const handleSetSelected = (i, planet) => {
    if (!selectedPlanets.includes(planet)) {
      if (planetName.length < 1) {
        setSelectedPlanets([...selectedPlanets, planets[i]]);
      } else {
        setSelectedPlanets([...selectedPlanets, filteredPlanets[i]]);
      }
    } else {
      const deleteIndex = selectedPlanets.indexOf(planet);
      selectedPlanets.splice(deleteIndex, 1);
      setSelectedPlanets([...selectedPlanets]);
    }
  };

  return (
    <div className="app">
      <div className="list-container">
        <SearchBar value={planetName} handleChange={(e) => handleChange(e)} />
        <PlanetsList
          planets={planetName.length < 1 ? planets : filteredPlanets}
          setSelected={handleSetSelected}
        />
      </div>
      <RadarChart selectedPlanets={selectedPlanets} />
      <style jsx>{styles}</style>
    </div>
  );
};

export default hot(module)(App);
