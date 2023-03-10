import axios from 'axios';

export const getMovies = async (query, page) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/`,
    {
      params: {
        page: `${page}`,
        name: `${query}`,
      },
    }
  );
  console.log(data);
  return data;
};
