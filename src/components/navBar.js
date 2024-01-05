import React, { useEffect, useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
const [search,setSearch]=useState('');




const handleInputChange=(e)=>{
    setSearch(e.target.value);   
}

const handleSearchClick=()=>{
  window.location.replace(`http://localhost:3000/movies-search/${search}`);
}


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
      <Link to="/">Welcome To Mmovies</Link>
        <ul className="list">
        <li><Link to="#">About</Link></li>
          <li><Link to="/watch-list">Watch List</Link></li>
          <li><Link to="#">News</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
        
        <button className="search" onClick={handleSearchClick}>Search</button>
        <button className="menu">Menu</button>
   <input type='text' onChange={handleInputChange} />  
      </nav>

   
    </>
  );
};

export default NavBar;
