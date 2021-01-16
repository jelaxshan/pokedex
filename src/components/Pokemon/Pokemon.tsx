import React from 'react';
import styled from 'styled-components';
import useSwr from 'swr';
import { ResponseByPokemonNameAPI } from '../../types/types';
import { fetcher } from '../../utils/fetcher';

interface Props {
  url: string;
  name: string;
}

const PokemonHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PokemonName = styled.span`
  margin-left: 1rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const PokemonNumber = styled.span`
  margin-right: 1rem;
`;

const PokemonImage = styled.img`
  margin-right: auto;
  margin-left: auto;
  display: flex;
`;

const PokemonInformation = styled.div`
  margin-left: 1rem;
`;

const Pokemon: React.FC<Props> = ({ url, name }) => {
  const { data, error } = useSwr<ResponseByPokemonNameAPI>(url, fetcher);

  if (error) {
    return <div>error...</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
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
      </PokemonInformation>
    </>
  );
};

export default Pokemon;
