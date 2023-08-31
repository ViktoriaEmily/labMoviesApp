import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favouritesTV, setFavouritesTV] = useState ([])

  const addToFavouritesTV = (show) => {
    let newFavouritesTV = [...favouritesTV];
    if (!favouritesTV.includes(show.id)) {
      newFavouritesTV.push(show.id);
    }
    setFavouritesTV(newFavouritesTV);
  };

  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavouritesTV = (show) => {
    setFavouritesTV( favouritesTV.filter(
      (mId) => mId !== show.id
    ) )
  };

  return (
    <ShowsContext.Provider
      value={{
        favouritesTV,
        addToFavouritesTV,
        removeFromFavouritesTV,
        addReview,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;