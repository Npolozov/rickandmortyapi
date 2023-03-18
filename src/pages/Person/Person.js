import { useLocation, useParams } from 'react-router-dom';
import { getPersonById } from 'helpers/api';
import { useEffect, useState } from 'react';
import {
  Img,
  Section,
  TitleName,
  Title,
  ListSection,
  ListTitle,
  Item,
  Paragraf,
  NavigationLink,
  ImgConteiner,
  ParagrafStatus,
} from './Person.style';

export const Person = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getById() {
      try {
        const onePerson = await getPersonById(id);
        console.log(onePerson);
        setPerson(onePerson);
      } catch (error) {}
    }

    getById();
  }, [id]);

  const { name, status, gender, type, image, species, origin } = person;

  if (!origin) {
    return;
  }

  return (
    <>
      <div>
        <NavigationLink to={location.state?.from ?? '/'}>
          Go Back
        </NavigationLink>
      </div>
      <Section>
        <ImgConteiner>
          <Img src={image} alt={name} />
          <TitleName>{name}</TitleName>
        </ImgConteiner>
        <ListSection>
          <ListTitle>Information</ListTitle>
          <ul>
            <Item>
              <Title>Gender</Title>
              <Paragraf>{gender}</Paragraf>
            </Item>
            <Item>
              <Title>Status</Title>
              <ParagrafStatus status={status}>{status}</ParagrafStatus>
            </Item>
            <Item>
              <Title>Species</Title>
              <Paragraf>{species}</Paragraf>
            </Item>
            <Item>
              <Title>Origin</Title>
              <Paragraf>{origin.name}</Paragraf>
            </Item>
            <Item>
              <Title>Type</Title>
              <Paragraf>{type ? type : 'Unknown'}</Paragraf>
            </Item>
          </ul>
        </ListSection>
      </Section>
    </>
  );
};
