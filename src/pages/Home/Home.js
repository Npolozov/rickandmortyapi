import { ListItem } from 'components/ListItem/ListItem';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { getMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import { List } from './Home.styled';

export const Home = () => {
  const [person, setPerson] = useState([]);
  const [search, setSearch] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getPerson() {
      try {
        const { results } = await getMovies(search);
        setPerson(results);
        // setSearchParams(value !== '' ? { query: value } : {});
      } catch (error) {
        console.log(error.message);
      }
    }
    getPerson();
  }, [search]);

  const onSearch = value => {
    setSearch(value);
  };

  return (
    <>
      <SearchInput onSearch={onSearch} value={search} />
      {person?.length > 0 && (
        <List>
          {person.map(({ name, image, id, species }) => (
            <ListItem key={id} name={name} image={image} species={species} />
          ))}
        </List>
      )}
    </>
  );
};
