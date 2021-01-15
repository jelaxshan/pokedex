import React from 'react';
import logo from '../../assets/pokemonLogoWhite.png';
import darkLogo from '../../assets/pokemonLogoBlack.jpg';
import { HeaderStyled, PokemonLogoHolder, PokemonLogo } from './Header.styled';
import { Toggle } from '../Toggle/Toggle';

interface Props {
  theme: string;
  themeToggler: () => void;
}

const toggleImage = (theme: string) => {
  return theme === 'light' ? logo : darkLogo;
};

const Header = ({ theme, themeToggler }: Props) => {
  const image = toggleImage(theme);
  return (
    <HeaderStyled>
      <PokemonLogoHolder>
        <PokemonLogo src={image} alt="Logo" />
        <Toggle toggleTheme={themeToggler} />
      </PokemonLogoHolder>
    </HeaderStyled>
  );
};

export default Header;
