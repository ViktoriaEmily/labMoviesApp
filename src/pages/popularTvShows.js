import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { getPopularTvShows } from "../api/tv-tmdb-api";
//import tvListHeaderStories from "../stories/tvListHeader.stories";


const PopularTvShowS = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getPopularTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = shows.filter(s => s.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  //const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Tv Shows"
      shows={shows}
      action={(shows) => {
        return <AddToFavouritesIcon show={shows} />
      }}
    />
);
};

export default PopularTvShowS;