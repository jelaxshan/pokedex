import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from './theme/globalStyles';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [myTheme, themeToggler, mountedComponent] = useDarkMode();

  const userChoice = myTheme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return null;
  return (
    <ThemeProvider theme={{ ...theme, colors: userChoice }}>
      <>
        <GlobalStyle />
        <Header theme={myTheme} themeToggler={themeToggler} />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
