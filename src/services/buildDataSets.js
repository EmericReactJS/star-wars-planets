import generateRandomColor from './generateRandomColor';

const buildDataSets = (selectedPlanets) => {
  const planetsDataSets = selectedPlanets.reduce((acc, curr) => {
    const label = curr.name;
    const randomBackgroundColor = generateRandomColor(label);
    const data = [
      curr.rotation_period,
      curr.orbital_period,
      curr.diameter,
      curr.gravity[0],
      curr.surface_water,
      curr.population
    ];
    return [...acc, { label, backgroundColor: randomBackgroundColor, data }];
  }, []);
  return planetsDataSets;
};

export default buildDataSets;
