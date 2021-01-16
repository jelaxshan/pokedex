import React from 'react';
import useSWR from 'swr';
import PokemonTypeBadge from '../PokemonTypeBadge/PokemonTypeBadge';
import { ResponseByPokemonNameAPI } from '../../types/types';
import { fetcher } from '../../utils/fetcher';
import {
  PokemonHeading,
  PokemonName,
  PokemonNumber,
  PokemonImage,
  PokemonInformation,
  PokemonBadges,
  PokeStatistics,
  Span,
  Overlay,
  BarChart,
  UL,
  PokemonStat,
} from './PokemonDetails.styled';
import { Spinner } from '../Loader/Spinner';

interface Props {
  url: string;
  name: string;
}

const PokemonDetails: React.FC<Props> = ({ url, name }) => {
  const { data, error } = useSWR<ResponseByPokemonNameAPI>(url, fetcher);

  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <Spinner />;
  }

  const types =
    data.types.map(({ type: { name } }) => name).join(', ') || 'none';

  return (
    <>
      <PokemonHeading>
        <PokemonName>{name}</PokemonName>
        <PokemonNumber>#{data.id}</PokemonNumber>
      </PokemonHeading>
      <PokemonBadges>
        {data.types.map((type) => (
          <PokemonTypeBadge key={type.type.name} type={type.type.name} />
        ))}
      </PokemonBadges>
      <PokemonImage src={data.sprites.front_default} />
      <PokemonInformation>
        <UL>
          <li>types: {types}</li>
          <li>height: {(data.height * 10) / 100} m</li>
          <li>weight: {data.weight / 10} kg</li>
        </UL>
        {data.stats.map((stat) => (
          <div key={stat.stat.name}>
            <PokeStatistics>
              <Span fontsize="xxxs">
                <strong>{stat.stat.name}</strong>
              </Span>
              <PokemonStat>
                <Overlay />
                <BarChart color={'#CD5241'} amount={stat.base_stat} />
              </PokemonStat>
            </PokeStatistics>
          </div>
        ))}
      </PokemonInformation>
    </>
  );
};

export default PokemonDetails;
