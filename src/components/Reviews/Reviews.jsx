import { getMovieReviews } from 'services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Item, TextAuthor } from './Reviews.styled';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    loadReviews(movieId);
  }, [movieId]);

  const loadReviews = async movieId => {
    try {
      const responseData = await getMovieReviews(movieId);

      const reviewsList = responseData.results.map(({ author, content }) => {
        const castItem = { author, content };
        return castItem;
      });
      if (reviewsList.length === 0) {
        console.log('Sorry, there are no reviews information by this film');
        return;
      }
      setReviewsList(reviewsList);
    } catch (error) {
      console.log('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {reviewsList?.length ? (
        <ul>
          {reviewsList.map(({ author, content }) => (
            <Item key={author}>
              <TextAuthor>AUTHOR: {author}</TextAuthor>
              <p>{content}</p>
            </Item>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this film</p>
      )}
    </>
  );
};

export default Reviews;
