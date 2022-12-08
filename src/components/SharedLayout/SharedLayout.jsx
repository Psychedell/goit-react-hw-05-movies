import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    text-shadow: 2px 2px 4px #000000;
    font-size: 20px;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav style={{ padding: 15, background: 'silver' }}>
          <StyledLink to="/" style={{ margin: 20 }} end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
