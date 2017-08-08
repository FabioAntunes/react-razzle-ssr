import styled from 'styled-components';

export const Figure = styled.div`
  float:left;
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  width: 200px;
  & > img {
    display: block;
    width: 100%;
  }
`;
