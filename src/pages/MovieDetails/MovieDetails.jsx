import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovie } from 'services/Api';
import {
  LinkStyled,
  MovieDecription,
  MovieInformation,
  AddInformation,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovie(movieId).then(data => {
      return setMovie(data);
    });
  }, [movieId]);

  const { poster_path, vote_average, overview, genres, original_title } = movie;
  return (
    <>
      <Link to={backLink}>Go back</Link>
      <MovieInformation>
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt="poster"
              width="400"
            />
          )}
        </div>
        <MovieDecription>
          <h1>{original_title}</h1>
          <p>User Score: {(vote_average * 10).toFixed()}%</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(genre => genre.name).join(', ')}</p>
        </MovieDecription>
      </MovieInformation>
      <AddInformation>
        <h4>Additional information</h4>
        <ul>
          <li>
            <LinkStyled to="casts">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </AddInformation>
    </>
  );
};

export default MovieDetails;
