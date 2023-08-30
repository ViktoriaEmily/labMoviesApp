import { useEffect, useState } from "react";
import {getShows} from '../api/tv-tmdb-api'

const useShows = series_id => {
  const [shows, setShows] = useState(null);
  useEffect(() => {
    getShows(series_id).then(shows => {
      setShows(shows);
    });
  }, [series_id]);
  return [shows, setShows];
};

export default useShows