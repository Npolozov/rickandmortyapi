import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: aqua;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  &:hover {
    color: aqua;
    background-color: white;
  }
`;
