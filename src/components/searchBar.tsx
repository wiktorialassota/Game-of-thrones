import React from 'react';
import './../styles/searchbar.scss';

type SearchBarProps = {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ searchTerm, handleSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search by character name or house..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;