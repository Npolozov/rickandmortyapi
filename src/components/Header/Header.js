import { HeaderConteiner, Image } from './Header.styled';
import imagititle from '../../helpers/images/Logo.jpg';

export const Header = () => {
  return (
    <HeaderConteiner>
      <Image src={imagititle} alt="title" />
    </HeaderConteiner>
  );
};
