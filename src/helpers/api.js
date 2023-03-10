import axios from 'axios';

export const getMovies = async (query, page) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${query}`,
    {
      params: {
        page: `${page}`,
      },
    }
  );
  console.log(data);
  return data;
};
