import React from 'react';
import { Button } from './Toggle.styled';

export const Toggle = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
