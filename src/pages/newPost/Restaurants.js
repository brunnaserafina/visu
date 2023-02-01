import { useEffect, useRef, useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Restaurants() {
  const [componentCount, setComponentCount] = useState(1);
  const navigate = useNavigate();

  function removeComponent() {
    if (componentCount === 1) {
      return;
    } else {
      setComponentCount(componentCount - 1);
    }
  }

  function nextPage() {
    navigate('/Accommodation');
  }

  return (
    <Wrapper>
      <div>🍽️</div>
      <h1>Adicione os restaurantes que</h1>
      <h1>você foi e avalie cada um!</h1>

      <span>
        <button onClick={() => setComponentCount(componentCount + 1)}>+</button>
        <button onClick={removeComponent}>-</button>
      </span>

      {Array.from({ length: componentCount }, (_, index) => (
        <MultipliedComponent key={index} />
      ))}

      <button onClick={nextPage}>OK</button>
    </Wrapper>
  );
}

function MultipliedComponent() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyAsWMR-nOHUR05B-Sk6l66evlsAKHv0_IA',
    onPlaceSelected: (place) => {
      console.log(place);
    },
  });

  return (
    <>
      <AutoComplete />

      <Stars>
        <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
      </Stars>
    </>
  );
}

function AutoComplete() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
  }, []);

  return <input ref={inputRef} placeholder="Restaurante" />;
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

  span {
    font-size: 28px;
    color: #d55e58;
  }

  span > button {
    background-color: #d55e58;
    margin-left: 5px;
    margin-bottom: 10px;
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
    margin-bottom: 3px;
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
