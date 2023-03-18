import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListSection = styled.div`
  width: 400px;
  margin-top: 40px;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const TitleName = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;

  /* Basic / Black */

  color: #081f32;
`;

export const ListTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  text-align: center;
  letter-spacing: 0.15px;

  /* Graybase / Gray 1 */

  color: #8e8e93;
`;
export const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.15px;

  /* Basic / Black */

  color: #081f32;
`;

export const Paragraf = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: 0.25px;

  color: #6e798c;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ParagrafStatus = styled.p`
  color: ${props => {
    switch (String(props.status)) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'black';
    }
  }};
`;
