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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.body};
`;
