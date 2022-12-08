import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link to="/">Back to home page</Link>
      <div>This page is not found!</div>;
    </>
  );
};

export default NotFound;
