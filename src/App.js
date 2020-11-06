import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import Header from './common/Header';
import PopularMovies from './features/PopularMovies';
import MoviePage from './features/MoviePage';
import PopularPeople from './features/PopularPeople';


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route path="/movie">
            <PopularMovies />
          </Route>
          <Route path="/people">
            <PopularPeople />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
