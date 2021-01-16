import React, { useState } from 'react';
import useSWR from 'swr';
import Pokemon from '../components/Pokemon/Pokemon';
import { fetcher } from '../utils/fetcher';
import { Container, PokeContainer } from './MainPage.styled';

interface NameUrl {
  name: string;
  url: string;
}
export interface ResponseDefaultAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NameUrl>;
}

const MainPage: React.FC = () => {
  const [pokemonApiURL] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  );
  const { data, error } = useSWR<ResponseDefaultAPI>(pokemonApiURL, fetcher);

  if (error) {
    return <div>error...</div>;
  }

  if (!data) {
    return <div>...loading</div>;
  }

  return (
    <Container>
      {data.results.map(({ name, url }) => (
        <PokeContainer key={name}>
          <Pokemon url={url} name={name} />
        </PokeContainer>
      ))}
    </Container>
  );
};

export default MainPage;
