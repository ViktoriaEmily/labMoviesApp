import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { getNowPlaying } from "../api/tmdb-api";

const NowPlaying = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  //const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="In Theatres"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);
};

export default NowPlaying;