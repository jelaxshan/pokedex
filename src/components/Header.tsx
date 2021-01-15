import React from 'react';
import styled from 'styled-components';
import logo from '../assets/pokemonLogoWhite.png';

const HeaderStyled = styled.header`
  top: 0;
  position: sticky;
  width: 100%;
  height: 75px;
`;

const PokemonLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin-top: 0.5rem;
`;

const PokemonLogoHolder = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme: { mediaQueries } }) => `
    ${mediaQueries.mediumAndUp} {
      justify-content: flex-start;
      margin-left: 2rem;
    }
  `}
`;

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <PokemonLogoHolder>
        <PokemonLogo src={logo} alt="Logo" />
      </PokemonLogoHolder>
    </HeaderStyled>
  );
};

export default Header;
