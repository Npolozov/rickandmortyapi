import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonSection = styled.div`
  padding: 30px;
`;
