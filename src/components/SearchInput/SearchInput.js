import { InputSection, Input } from './SearchInput.styled';

export const SearchInput = ({ setSearch, value }) => {
  const hundleSearch = event => {
    setSearch(event.target.value !== '' ? { name: event.target.value } : {});
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
