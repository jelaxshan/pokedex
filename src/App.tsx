import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PokemonDetails from './pages/PokemonDetails';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/:pokemonName" component={PokemonDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
