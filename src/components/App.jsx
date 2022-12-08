import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Casts from './Casts/Casts';
// import Reviews from './Reviews/Reviews';
// import MyLoader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Casts = lazy(() => import('./Casts/Casts'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="casts" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
