import fetch from 'isomorphic-fetch';

const urls = [
  'https://swapi.dev/api/planets/',
  'https://swapi.dev/api/planets/?page=2',
  'https://swapi.dev/api/planets/?page=3',
  'https://swapi.dev/api/planets/?page=4',
  'https://swapi.dev/api/planets/?page=5',
  'https://swapi.dev/api/planets/?page=6'
];

const checkStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

const fetchPlanets = async () => {
  const results = await Promise.all(
    urls.map((url) =>
      fetch(url)
        .then(checkStatus)
        .then((res) => res.json())
        .catch((err) => console.log(err))
    )
  );
  const planets = results.reduce((acc, curr) => {
    let { results } = curr;
    return [...acc, ...results];
  }, []);
  return planets;
};

export default fetchPlanets;
