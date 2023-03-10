import { ListItem } from 'components/ListItem/ListItem';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { getMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { List } from './HomeTwo.styled';

export const HomeTwo = () => {
  const [person, setPerson] = useState([]);
  //   const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('name') ?? '';

  const onSearch = value => {
    setSearchParams(value !== '' ? { name: value } : {});
  };

  useEffect(() => {
    async function getPerson() {
      try {
        const { results } = await getMovies(searchQuery);
        setPerson(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPerson();
  }, [searchQuery]);

  return (
    <>
      <SearchInput onSearch={onSearch} value={searchQuery} />
      {person && (
        <List>
          {person.map(({ name, image, id, species }) => (
            <ListItem key={id} name={name} image={image} species={species} />
          ))}
        </List>
      )}
    </>
  );
};
