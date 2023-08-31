import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIconTV from "@mui/icons-material/Favorite";

const AddToFavouritesIconTV = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleAddToFavouritesTV = (e) => {
    e.preventDefault();
    context.addToFavouritesTV(show);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavouritesTV}>
      <FavoriteIconTV color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIconTV;