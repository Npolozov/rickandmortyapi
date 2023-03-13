import { useLocation } from 'react-router-dom';
import { Item, Info, Link, Title, Paragraf } from './ListItem.styled';

export const ListItem = ({ id, name, image, species }) => {
  const location = useLocation();

  return (
    <Link to={`/${id}`} state={{ from: location }}>
      <Item>
        <img src={image} alt={name} />
        <Info>
          <Title>{name}</Title>
          <Paragraf>{species}</Paragraf>
        </Info>
      </Item>
    </Link>
  );
};
