import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LatestMovies from './pages/latestMovies'
import TopRatedMovies from "./pages/topRatedMovies";
import NowPlaying from "./pages/nowPlaying";
import SimilarMovies from "./pages/similarMovies";
import PopularTvShows from "./pages/popularTvShows";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="pages/favouriteMoviesPage" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="pages/latestMovies" element={ <LatestMovies/>} />
        <Route path="pages/topRatedMovies" element= {<TopRatedMovies/>}/>
        <Route path="pages/nowPlaying" element= {<NowPlaying/>} />
        <Route path= "pages/similarMovies/:id" element= {<SimilarMovies/>}/>
        <Route path= "pages/popularTvShows" element= {<PopularTvShows/>}/>
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );