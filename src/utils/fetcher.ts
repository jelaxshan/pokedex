import axios from 'axios';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const getPokemonByName = (name: string) =>
  `https://pokeapi.co/api/v2/pokemon/${name}`;

export const getPokemons = () =>
  'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
