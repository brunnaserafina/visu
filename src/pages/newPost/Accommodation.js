import { useEffect, useRef, useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Accommodation() {
  const navigate = useNavigate();
    
  function nextPage() {
    navigate('/Pictures');
  }

  return (
    <Wrapper>
      <div>🛏️</div>
      <h1>Informe sobre</h1>
      <h1>sua hospedagem</h1>

      <AutoComplete />

      <select name="select">
        <option value="" disabled  selected >
          Tipo de estadia
        </option>
        <option value="valor1">Airbnb</option>
        <option value="valor2">Hotel</option>
        <option value="valor3">Outro</option>
      </select>

      <button onClick={nextPage}>OK</button>
    </Wrapper>
  );
}

function AutoComplete() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
  }, []);

  return <input ref={inputRef} placeholder="Localização" />;
}

const Stars = styled.span`
  height: 30px;
  margin-bottom: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  select {
    width: 60vw;
    border: none;
    border-radius: 15px;
    height: 30px;
    text-align: center;
    margin-bottom: 10px;
    color: #666666;
  }

  div {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    margin-top: 8px;
    margin-bottom: 5px;
    height: 30px;
    width: 60vw;
    border: none;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
  }

  button {
    color: white;
    border: none;
    background-color: #666666;
    font-size: 18px;
    font-weight: 700;
  }
`;
