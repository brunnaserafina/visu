import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import { Wrapper } from '../../common/WrapperPost';
import PostContext from '../../contexts/PostContext';
import { Rating } from '../../common/Rating';

export default function Attractions() {
  const [componentCount, setComponentCount] = useState(1);
  const { attractions, setAttractions } = useContext(PostContext);
  const navigate = useNavigate();

  function removeComponent() {
    if (componentCount === 1) {
      setAttractions([]);
    }
    
    setComponentCount(componentCount - 1);
    attractions.pop();
  }

  function submit(event) {
    event.preventDefault();

    if (attractions.length === 0) {
      toast('Selecione pelo menos um ponto turístico!');
      return;
    }

    navigate('/Restaurants');
  }

  return (
    <Wrapper>
      <div>🏖️</div>
      <h1>Adicione os pontos turísticos</h1>
      <h1>que você visitou e avalie cada um!</h1>

      <span>
        <button onClick={() => setComponentCount(componentCount + 1)}>+</button>
        <button onClick={removeComponent}>-</button>
      </span>

      <form onSubmit={submit}>
        {Array.from({ length: componentCount }, (_, index) => (
          <MultipliedComponent key={index} />
        ))}

        <button type="submit">OK</button>
      </form>
    </Wrapper>
  );
}

function MultipliedComponent() {
  const [place, setPlace] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const { attractions, setAttractions } = useContext(PostContext);
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
  }, []);

  const ratingChanged = (newRating) => {
    const existingPlace = attractions.find((obj) => obj.name === place);

    if (existingPlace) {
      existingPlace.avaliation = newRating;
    } else {
      if (place) setIsDisabled(true);
      setAttractions([...attractions, { name: place, avaliation: newRating }]);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Ponto Turístico"
        value={place}
        onBlur={(e) => setPlace(e.target.value)}
        disabled={isDisabled}
        required
      />

      <Rating>
        <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
      </Rating>
    </>
  );
}

