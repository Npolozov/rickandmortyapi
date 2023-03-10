import { InputSection, Input } from './SearchInput.styled';
import { useState } from 'react';

export const SearchInput = ({ setSearch, value }) => {
  const [query, setQuery] = useState('');

  const hundleSearch = event => {
    setQuery(event.currentTarget.value.toLowerCase());
    setSearch(query);
  };
  return (
    <InputSection>
      <Input
        value={value}
        type="text"
        placeholder="Search"
        onChange={hundleSearch}
      />
    </InputSection>
  );
};
