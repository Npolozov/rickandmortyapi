import styled from 'styled-components';

export const InputSection = styled.section`
  padding: 20px;
`;

export const Input = styled.input`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  font-size: 20px;
  border-radius: 4px;
  outline: none;
  padding: 10px 10px;

  &:hover,
  &:focus {
    background: #e5e5e5;
  }

  &::placeholder {
    font-size: 18px;
  }
`;
