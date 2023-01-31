import styled from 'styled-components';
import AutoComplete from 'react-google-autocomplete';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function City() {
  const navigate = useNavigate();
  const [cityStart, setCityStart] = useState('');
  const [cityEnd, setCityEnd] = useState('');

  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  function nextPage() {
    navigate('/Date');
  }

  return (
    <Wrapper>
      <div>🌎</div>
      <h1>De que cidade você saiu?</h1>
      <AutoComplete apiKey={key} onPlaceSelected={(place) => setCityStart(place)} />
      <h1>Para qual cidade você foi?</h1>
      <AutoComplete apiKey={key} onPlaceSelected={(place) => setCityEnd(place)} />
      <button onClick={nextPage}>OK</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 10px;
    height: 30px;
    width: 60vw;
    border: none;
    border-radius: 15px;
    padding: 15px;
  }

  button {
    color: white;
    border: none;
    background-color: #666666;
    font-size: 18px;
    font-weight: 700;
  }
`;
