import styled from 'styled-components';

export const PokemonBadge = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  text-align: center;
  width: 5rem;
  border-radius: 1rem;
  padding: 4px;
  margin-right: 0.5rem;
`;
