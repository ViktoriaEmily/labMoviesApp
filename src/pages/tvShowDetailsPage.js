import React from "react";
import { useParams } from 'react-router-dom';
import TvShowDetails from "../components/tvShowDetails/";
import PageTemplate from "../components/templateShowPage";
//import useMovie from "../hooks/useMovie";
import { getShows } from '../api/tv-tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';



const TvShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: shows, error, isLoading, isError } = useQuery(
    ["shows", { id: id }],
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
          <PageTemplate show={shows}>
            <TvShowDetails show={shows} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TvShowDetailsPage;