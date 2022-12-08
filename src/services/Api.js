import axios from 'axios';

const API_KEY = 'e0db436e7fdd91f6353b0e62897529c1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchMovies = async (pathName = '', queryString = '') => {
  try {
    const response = await axios.get(
      `${pathName}?api_key=${API_KEY}&${queryString}`
    );

    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
};

export const getTrending = () => {
  const pathName = '/trending/movie/day';
  return fetchMovies(pathName);
};

export const getMovie = movieId => {
  const pathName = `movie/${movieId}`;
  return fetchMovies(pathName);
};

export const getMovieCast = movieId => {
  const pathName = `movie/${movieId}/credits`;
  return fetchMovies(pathName);
};

export const getMovieReviews = movieId => {
  const pathName = `movie/${movieId}/reviews`;
  return fetchMovies(pathName);
};

export const getMovieSearch = query => {
  const pathName = `search/movie`;
  const queryString = `&query=${query}`;
  return fetchMovies(pathName, queryString);
};
