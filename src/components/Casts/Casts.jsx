// import { getMovieCast } from 'services/Api';

// const Casts = () => {
//   getMovieCast();

//   return <p>Castsssssssssssssss text...............</p>;
// };

// export default Casts;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import { List, Item, CardThumb, Image, Span } from './Cast.styled';

const Cast = () => {
  const [actorsList, setActorsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    loadCast(movieId);
  }, [movieId]);

  const loadCast = async movieId => {
    try {
      const responseData = await getMovieCast(movieId);

      const castList = responseData.cast.map(
        ({ character, name, profile_path }) => {
          const castItem = { character, name, profile_path };
          return castItem;
        }
      );
      if (castList.length === 0) {
        console.log('Sorry, there are no cast information by this film');
        return;
      }
      setActorsList(castList);
    } catch (error) {
      console.log('Something went wrong. Please try again.');
    }
  };

  return (
    <List>
      {actorsList.map(({ character, name, profile_path }) => (
        <Item key={name}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
            }
            alt={name}
            width="300"
          ></Image>
          <CardThumb>
            <h3>{name}</h3>
            {character && (
              <p>
                Character: <Span>{character}</Span>{' '}
              </p>
            )}
          </CardThumb>
        </Item>
      ))}
    </List>
  );
};

export default Cast;
