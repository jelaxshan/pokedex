import styled from 'styled-components';

export const PokemonHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PokemonName = styled.span`
  margin-left: 1rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PokemonNumber = styled.span`
  margin-right: 1rem;
`;

export const PokemonImage = styled.img`
  margin-right: auto;
  margin-left: auto;
  display: flex;
`;

export const PokemonInformation = styled.div`
  margin-left: 1rem;
`;
