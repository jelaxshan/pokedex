import { useEffect, useState } from 'react';
export const useDarkMode = (): [
  myTheme: string,
  themeToggler: () => void,
  mountedComponent: boolean
] => {
  const [myTheme, setMyTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setMyTheme(mode);
  };

  const themeToggler = () => {
    myTheme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setMyTheme(localTheme);
    setMountedComponent(true);
  }, []);
  return [myTheme, themeToggler, mountedComponent];
};
