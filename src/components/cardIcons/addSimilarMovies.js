import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const AddSimilarMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddSimilarMovies = (e) => {
    e.preventDefault();
    context.addSimilarMovies(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddSimilarMovies}>
      <Button variant ="outlined" color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddSimilarMovies;