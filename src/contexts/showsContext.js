import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState ([])

  const addToFavourites = (show) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavourites(newFavourites);
  };

  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavourites( favourites.filter(
      (mId) => mId !== show.id
    ) )
  };

  return (
    <ShowsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;