import { LoadMore } from 'components/Button/Button';
import { Header } from 'components/Header/Header';
import { ListItem } from 'components/ListItem/ListItem';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { getMovies } from 'helpers/api';
import { Loadder } from 'helpers/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { List, ButtonSection } from './Home.styled';

export const Home = () => {
  const [person, setPerson] = useState([]);
  const [search, setSearch] = useSearchParams();
  const searchQuery = search.get('name') || '';
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getPerson() {
      try {
        setLoading(true);
        const { results } = await getMovies(searchQuery, page);
        setPerson([...person, ...results]);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getPerson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, page]);

  return (
    <>
      <Header />
      <SearchInput setSearch={setSearch} value={searchQuery} />
      {loading && <Loadder />}
      {person?.length > 0 && (
        <List>
          {person.map(({ name, image, id, species }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              image={image}
              species={species}
            />
          ))}
        </List>
      )}
      <ButtonSection>
        <LoadMore onClick={loadMore} />
      </ButtonSection>
    </>
  );
};
