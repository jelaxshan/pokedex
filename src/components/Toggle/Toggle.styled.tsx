import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.5rem;
  padding: 0.6rem;
  margin-right: 2rem;
  height: 50%;
  display: flex;
  align-self: center;
  }
`;
