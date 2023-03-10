import styled from 'styled-components';

export const InputSection = styled.section`
  padding: 20px;
`;

export const Input = styled.input`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px;
  outline: none;
  padding: 10px 10px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
