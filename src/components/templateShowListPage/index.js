import React, { useState } from "react";
import ShowHeader from "../headerTvList";
import FilterTVCard from "../filterTvCard";
import ShowList from "../showList";
import Grid from "@mui/material/Grid";

function ShowListPageTemplate({ shows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedShows = shows
    .filter((s) => {
      return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <ShowHeader title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterTVCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ShowList action={action} shows={displayedShows}></ShowList>
      </Grid>
    </Grid>
  );
}
export default ShowListPageTemplate;