import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  max-width: 200px;
  border: 1px solid grey;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardThumb = styled.div`
  height: 100%;
  border-top: 1px solid grey;
  padding: 5px;
  text-align: center;
`;

export const Span = styled.span`
  font-style: italic;
`;
