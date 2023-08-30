import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const AddSimilarShows = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleAddSimilarShows = (e) => {
    e.preventDefault();
    context.AddSimilarShows(show);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddSimilarShows}>
      <Button variant ="outlined" color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddSimilarShows;