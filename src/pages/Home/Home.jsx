import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrending } from 'services/Api';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(data => setTrendingFilms(data.results))
      .catch(error => console.log(error));
  }, []);

  if (trendingFilms.length === 0) {
    return;
  }

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {trendingFilms.map(film => {
          return (
            <li key={film.id} style={{ margin: 5 }}>
              <NavLink to={`/movies/${film.id}`} state={{ from: location }}>
                {film.original_title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
