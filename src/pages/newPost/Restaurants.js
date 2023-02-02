import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';
import { Rating } from '../../common/Rating';

export default function Restaurants() {
  const [componentCount, setComponentCount] = useState(1);
  const { restaurants, setRestaurants } = useContext(PostContext);
  const navigate = useNavigate();

  function removeComponent() {
    if (componentCount === 1) {
      setRestaurants([]);
    }
    setComponentCount(componentCount - 1);
    restaurants.pop();
  }

  function submit(event) {
    event.preventDefault();

    if (restaurants.length === 0) {
      toast('Insira pelo menos um restaurante!');
      return;
    }

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
  const [name, setName] = useState();
  const { restaurants, setRestaurants } = useContext(PostContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
  }, []);

  const ratingChanged = (newRating) => {
    const existingRestaurant = restaurants.find((obj) => obj.name === name);

    if (existingRestaurant) {
      existingRestaurant.avaliation = newRating;
    } else {
      if (name) setIsDisabled(true);

      setRestaurants([...restaurants, { name: name, avaliation: newRating }]);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Restaurante"
        value={name}
        onBlur={(e) => setName(e.target.value)}
        disabled={isDisabled}
        required
      />

      <Rating>
        <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
      </Rating>
    </>
  );
}

