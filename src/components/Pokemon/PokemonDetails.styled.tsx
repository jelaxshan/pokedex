import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PokeContainer = styled.div`
  border-color: ${({ theme }) => theme.colors.toggleBorder};
  border: 1px solid;
  margin-bottom: 2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 15rem;
`;

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

export const PokemonBadges = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PokemonInformation = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const UL = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Stat = styled.span`
  flex: 2;
  position: relative;
  margin-bottom: 0.25rem;
`;

export const Overlay = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  width: 95%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1rem;
`;
export const Bar = styled.div<{ color: string; amount: number }>`
  width: ${({ amount }) => (amount / 150) * 100}%;
  height: 1rem;
  background: ${({ color }) => color};
  transition: width 2s ease;
  position: relative;
`;

export const Span = styled.span<{ fontsize: string }>`
  flex: 1;
  font-size: ${({ theme, fontsize }) => theme.fontSize[`${fontsize}`]};
`;

export const PokeStats = styled.div`
  display: flex;
`;
