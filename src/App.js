import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import MoviesComponent from './components/movies/MoviesComponent.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDetails from './pages/movies-details.js'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesComponent />} />
          <Route path="/movies-details/:id" element={<MoviesDetails  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
