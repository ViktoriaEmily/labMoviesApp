import React from "react";
import { useParams } from 'react-router-dom';
import tvShowDetails from "../components/tvShowDetails/";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getShows } from '../api/tv-tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'



const tvShowDetailsPage = (props) => {
  const { series_id } = useParams();

  const { data: shows, error, isLoading, isError } = useQuery(
    ["shows", { id: series_id }],
    getShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {shows ? (
        <>
          <PageTemplate shows={shows}>
            <tvShowDetails shows={shows} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default tvShowDetailsPage;