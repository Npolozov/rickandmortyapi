import { Item, Info } from './ListItem.styled';

export const ListItem = ({ name, image, species }) => {
  return (
    <Item>
      <img src={image} alt={name} />
      <Info>
        <p>{name}</p>
        <p>{species}</p>
      </Info>
    </Item>
  );
};
