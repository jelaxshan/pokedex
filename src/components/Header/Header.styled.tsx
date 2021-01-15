import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  position: sticky;
  width: 100%;
  height: 75px;
`;

export const PokemonLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin-top: 0.5rem;
`;

export const PokemonLogoHolder = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.mediumAndUp} {
      justify-content: space-between;
      margin-left: 2rem;
    }
  `}
`;
