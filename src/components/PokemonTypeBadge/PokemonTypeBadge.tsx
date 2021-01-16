import React from 'react';
import { typeColorMap } from '../../utils/pokemonTypeBadgeColor';
import { PokemonBadge } from './PokemonTypeBadge.styled';

interface Props {
  type:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'unkwnon'
    | 'shadow';
}

const PokemonTypeBadge: React.FC<Props> = ({ type }) => (
  <PokemonBadge color={typeColorMap[type]}>{type}</PokemonBadge>
);

export default PokemonTypeBadge;
