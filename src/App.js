

import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?&apikey=f29a8c13'

function App() {
 //api key = f29a8c13

 const [movies, setMovies] =useState([])
 const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
  searchMovies('superman')
 }, [])

 const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json();

  setMovies(data.Search);
 }

  return (
    <div className="app">
      <h1>Meriles Movieland</h1>
      <div className='search'>
        <input 
        placeholder='search movies here'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <img src={searchIcon} 
        alt='search'
        onClick={() => {searchMovies(searchTerm)}}
        />
      </div>
      {
        movies?.length > 0 
        ? (
          <div className='container'>
         {movies.map((movie) => (
          <MovieCard movie={movie}/>
         ))} 
         </div>
        ) : (<div className='empty'>
          <h2>No movies found</h2>
        </div>)
      }
     
    </div>
  );
}

export default App;
