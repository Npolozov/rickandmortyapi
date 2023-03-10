import { InputSection, Input } from './SearchInput.styled';
import { useState } from 'react';

export const SearchInput = ({ onSearch, value }) => {
  const [query, setQuery] = useState('');
  console.log(query);

  const hundleSearch = event => {
    setQuery(event.currentTarget.value);
    onSearch(query);
  };

  return (
    <InputSection>
      <Input
        defaultValue={value}
        type="text"
        placeholder="Search"
        onChange={hundleSearch}
      />
    </InputSection>
  );
};
