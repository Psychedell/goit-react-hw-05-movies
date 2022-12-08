import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  color: blue;
  text-decoration: underline;

  &.active {
    text-decoration: none;
    color: black;
    text-shadow: 2px 2px 4px #000000;
    font-size: 20px;
  }
`;

export const MovieInformation = styled.section`
  display: flex;
`;

export const MovieDecription = styled.div`
  padding: 20px;
`;

export const AddInformation = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-top: 1px solid grey;
`;
