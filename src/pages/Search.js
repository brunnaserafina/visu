import Home from './Home';
import { DebounceInput } from 'react-debounce-input';
import { useState } from 'react';
import styled from 'styled-components';

export default function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function searchTravel(search) {
    setIsLoading(true);
    setSearch(search);

    if (search.length >= 1) {
    }
  }

  return (
    <>
      <SearchBar>
        <DebounceInput
          minLength={1}
          debounceTimeout={300}
          onChange={(e) => searchTravel(e.target.value)}
          type="text"
          placeholder="🔎 Procure viagens (pesquise a cidade)"
        />
      </SearchBar>
      <Home />
    </>
  );
}

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 85vw;
    height: 40px;
    border-radius: 15px;
    margin-top: 1vh;
    border: none;
    padding: 10px;
    text-align: center;
    font-size: 15px;
    font-family: 'Lexend Deca', sans-serif;

    @media (min-width: 1000px) {
      width: 46vw;
    }
  }
`;
