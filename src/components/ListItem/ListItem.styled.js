import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Item = styled.li`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  height: 100%;
`;

export const Info = styled.div`
  padding: 12px 16px;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
`;

export const Paragraf = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
`;
