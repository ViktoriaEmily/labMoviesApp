export const getSimilarTv = (args) => {
    console.log(args)
   const [, idPart] = args.queryKey;
   const { id } = idPart;
   return fetch(
    `https://api.themoviedb.org/3/discover/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
   ).then((response) => {
     if (!response.ok) {
       throw new Error(response.json().message);
     }
     return response.json();
   })
   .catch((error) => {
     throw error
  });
  };
 
  
//   export const getNowPlaying = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error
//     });
//   };
  
  
//   export const getLatestMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error
//     });
//   };
  
  
  export const getPopularTvShows = () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  
  
  // export const getShows = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };
    
  
  export const getShows = (args) => {
       console.log(args)
      const [, idPart] = args.queryKey;
      const { series_id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/tv/${series_id}/?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
    
  
    export const getShowGenres = async () => {
      return fetch(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
          process.env.REACT_APP_TMDB_KEY +
          "&language=en-US"
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
    
  
    export const getTvShowImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { series_id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/tv/${series_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
  
    };
    
  
    
//     export const getMovieReviews = (id) => {
//       return fetch(
//         `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//       )
//         .then((res) => res.json())
//         .then((json) => {
//           // console.log(json.results);
//           return json.results;
//         });
//     };