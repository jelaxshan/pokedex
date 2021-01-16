import React, { useState } from 'react';
import useSwr from 'swr';
import { ResponseByPokemonNameAPI } from '../../types/types';
import { fetcher } from '../../utils/fetcher';
import {
  PokemonHeading,
  PokemonName,
  PokemonNumber,
  PokemonImage,
  PokemonInformation,
} from './Pokemon.styled';
import PokemonDetails from './PokemonDetails';

interface Props {
  url: string;
  name: string;
}

const Pokemon: React.FC<Props> = ({ url, name }) => {
  const [showPokemonDetail, setShowPokemonDetail] = useState<boolean>(false);
  const { data, error } = useSwr<ResponseByPokemonNameAPI>(url, fetcher);

  const togglePokemonCard = () => {
    setShowPokemonDetail(!showPokemonDetail);
  };
  if (error) {
    return <div>error...</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div onClick={togglePokemonCard}>
      {!showPokemonDetail ? (
        <>
          <PokemonHeading>
            <PokemonName>{name}</PokemonName>
            <PokemonNumber>#{data.id}</PokemonNumber>
          </PokemonHeading>
          <PokemonImage src={data.sprites.front_default} />
          <PokemonInformation>
            <div>Name: {data.name}</div>
            <div>Height: {data.height}</div>
            <div>Weight: {data.weight}</div>
            <div>
              Abilities:{' '}
              {data.abilities.map(({ ability: { name } }) => name).join(', ')}
            </div>
          </PokemonInformation>{' '}
        </>
      ) : (
        <PokemonDetails url={url} name={name} />
      )}
    </div>
  );
};

export default Pokemon;
