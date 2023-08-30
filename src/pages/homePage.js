import React, {useState, useEffect} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { getShows } from "../api/tv-tmdb-api";



const HomePage = (props) => {
  const [movies, setMovies, error, isLoading, isError] = useState ([]);
  useEffect(()  => {
    getMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  // if const [shows, setShows, error, isLoading, isError] = useSate ([]);
  // useEffect(() => {
  //   getShows().then(shows => {
  //     setShows(shows.results);
  //   } })


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  console.log(movies)
// Redundant, but necessary to avoid app crashing.
  
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  //const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);
};


export default HomePage;