import { Button, Input, Form } from './Movies.styled';
import { HiSearch } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getMovieSearch } from 'services/Api';
import { useEffect } from 'react';
import { useState } from 'react';
// import MyLoader from 'components/Loader/Loader';

const Movies = () => {
  const [fetchFilms, setFetchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [loader, setLoader] = useState('false');

  const inputSearchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!inputSearchQuery) {
      return;
    }
    getMovieSearch(inputSearchQuery)
      .then(data => {
        // setLoader('true');
        setFetchFilms(data.results);
      })
      .catch(error => console.log(error));
    // .finally(setLoader('false'));
  }, [inputSearchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = e.target.elements.query.value;

    if (!inputValue) {
      return alert('Please enter a movie title for search!');
    }
    setSearchParams({ query: inputValue });

    e.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Button type="submit">
          <HiSearch />
        </Button>
      </Form>

      <ul>
        {/* {loader === 'true' && <MyLoader />} */}
        {inputSearchQuery &&
          fetchFilms.map(film => {
            return (
              <li key={film.id} style={{ margin: 5 }}>
                <NavLink to={`/movies/${film.id}`}>
                  {film.original_title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
