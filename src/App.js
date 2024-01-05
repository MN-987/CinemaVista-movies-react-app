import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import MoviesComponent from './components/movies/MoviesComponent.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDetails from './pages/movies-details.js'
import MovieSearch from './pages/movies-search.js'
import MoviesWatchList from './pages/movies-watch-list.js'
import Register from './pages/Register.js';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<MoviesComponent />} />
          <Route path="/movies-details/:id" element={<MoviesDetails  />} />
          <Route path="/movies-search/:search" element={<MovieSearch  />} />
          <Route path='watch-list' element={<MoviesWatchList/>} />
          <Route path='register' element={<Register/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
