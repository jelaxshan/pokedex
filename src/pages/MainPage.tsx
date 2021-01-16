import React, { useState } from 'react';
import useSWR from 'swr';
import Pokemon from '../components/Pokemon/Pokemon';
import { fetcher } from '../utils/fetcher';
import {
  Button,
  ButtonWrapper,
  Container,
  PokeContainer,
} from './MainPage.styled';

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
  const [pokemonApiURL, setPokemonApiURL] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  );
  const { data, error } = useSWR<ResponseDefaultAPI>(pokemonApiURL, fetcher);

  const handlePreviousPageClick = () => {
    if (data?.previous) {
      setPokemonApiURL(data.previous);
    }
  };

  const handleNextPageClick = () => {
    if (data?.next) {
      setPokemonApiURL(data.next);
    }
  };

  if (error) {
    return <div>error...</div>;
  }

  if (!data) {
    return <div>...loading</div>;
  }

  return (
    <>
      <Container>
        {data.results.map(({ name, url }) => (
          <PokeContainer key={name}>
            <Pokemon url={url} name={name} />
          </PokeContainer>
        ))}
      </Container>
      <ButtonWrapper>
        {data?.previous && (
          <Button onClick={handlePreviousPageClick}>Previous</Button>
        )}
        {data?.next && <Button onClick={handleNextPageClick}>Next</Button>}
      </ButtonWrapper>
    </>
  );
};

export default MainPage;
