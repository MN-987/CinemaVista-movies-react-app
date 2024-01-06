import React, { useEffect, useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const watchListArrLength = useSelector(state => state.watchList.watchListArr.length);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    window.location.replace(`http://localhost:3000/movies-search/${search}`);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // You can add logic here to change the language in your app
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavHidden(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`mask ${isNavHidden ? 'is-hidden' : ''}`}>
        <Link to="/">Welcome To CinemaVista</Link>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/watch-list">Watch List <h6 style={{ display: 'inline', color: 'red', marginLeft: '5px' }}> {watchListArrLength}</h6></Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li>
          <div className="language-dropdown" >
          <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
          </li>
        </ul>

 

        <button className="search" onClick={handleSearchClick}>Search</button>
        <button className="menu">Menu</button>
        <input type='text' onChange={handleInputChange} />
      </nav>
    </>
  );
};

export default NavBar;
