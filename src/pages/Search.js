import { useContext, useState } from 'react';
import styled from 'styled-components';
import Home from './Home';
import TravelContext from '../contexts/TravelContext';

export default function Search() {
  const [search, setSearch] = useState('');
  const { travels } = useContext(TravelContext);
  
  const travelFiltered = travels.filter((travel) =>
    travel.city_destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar>
        <input
          value={search}
          type="text"
          placeholder="🔎 Procure viagens (pesquise a cidade)"
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBar>
      <Home travelsToShow={travelFiltered} />
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
