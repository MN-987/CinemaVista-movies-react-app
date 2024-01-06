import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import MoviesComponent from './components/movies/MoviesComponent.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDetails from './pages/movies-details.js';
import MovieSearch from './pages/movies-search.js';
import Register from './pages/Register.js';
import { LanguageContext } from './context/language.js';
import React, { Suspense, useState } from 'react';
import Loader from './components/movies/Loader.js';

const MoviesWatchList = React.lazy(() => import('./pages/movies-watch-list.js'));
function App() {
  const [language, setLanguage] = useState('en');

  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <NavBar />

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MoviesComponent />} />
              <Route path="/movies-details/:id" element={<MoviesDetails />} />
              <Route path="/movies-search/:search" element={<MovieSearch />} />
              <Route path="watch-list" element={<MoviesWatchList />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </Suspense>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
