import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import SearchBar from './components/SearchBar';
import PlanetsList from './components/PlanetsList';
import RadarChart from './components/RadarChart';
import fetchPlanets from './services/api/fetchPlanets';

const App = () => {
  const [planets, setPlanets] = useState([]); // planet list fetched;
  const [planetName, setPlanetName] = useState(''); // planet name;
  const [filteredPlanets, setFilteredPlanets] = useState([]); // planet list filtered by search;
  const [selected, setSelected] = useState(); // selected radio button of planet bool;
  const [selectedPlanets, setSelectedPlanets] = useState([]); // selected planet list;
  const [cssTransition, setCssTransition] = useState(); // sets cssTransition from react transition group;

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
        setSelected(planets.indexOf(planet));
        setSelectedPlanets([...selectedPlanets, planets[i]]);
      } else {
        setSelected(filteredPlanets.indexOf(planet));
        setSelectedPlanets([...selectedPlanets, filteredPlanets[i]]);
      }
    }
  };

  return (
    <div className="App">
      <SearchBar value={planetName} handleChange={(e) => handleChange(e)} />
      <PlanetsList
        planets={planetName.length < 1 ? planets : filteredPlanets}
        setSelected={handleSetSelected}
      />
      {/* wrap in Csstransisiton */}

      <RadarChart selectedPlanets={selectedPlanets} selected={selected} />
    </div>
  );
};

export default hot(module)(App);
