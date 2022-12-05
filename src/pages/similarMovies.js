import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { getSimilarMovies } from "../api/tmdb-api";
//import { getMovie } from "../api/tmdb-api";
import { useParams } from 'react-router-dom';

const SimilarMovies = (props) => {
    const { id } = useParams();

    const { data, error, isLoading, isError } = useQuery(
      ["movies", { id: id }],
      getSimilarMovies
    );

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
      title="Similar Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);

};

export default SimilarMovies;