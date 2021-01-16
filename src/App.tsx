import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from './theme/globalStyles';
import { useDarkMode } from './hooks/useDarkMode';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const App = () => {
  const [myTheme, themeToggler, mountedComponent] = useDarkMode();

  const userChoice = myTheme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return null;
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
    </ErrorBoundary>
  );
};

export default App;
