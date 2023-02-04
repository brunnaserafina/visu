import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';
import { Rating } from '../../common/Rating';
import Exit from '../../common/Exit';

export default function Accommodation() {
  const [typeAccommodation, setTypeAccommodation] = useState();
  const [localization, setLocalization] = useState();
  const [avaliation, setAvaliation] = useState(0);
  const { setAccommodation } = useContext(PostContext);
  const navigate = useNavigate();
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
  }, []);

  const ratingChanged = (newRating) => {
    setAvaliation(newRating);
  };

  function submit(event) {
    event.preventDefault();
    setAccommodation({ localization, type: typeAccommodation, avaliation });
    navigate('/Pictures');
  }

  return (
    <>
      <Exit />
      <Wrapper>
        <div>🛏️</div>
        <h1>Informe sobre</h1>
        <h1>sua hospedagem</h1>

        <form onSubmit={submit}>
          <h6>Tipo de estadia:</h6>
          <select
            name="select"
            value={typeAccommodation}
            onChange={(e) => setTypeAccommodation(e.target.value)}
            required
          >
            <option value="Airbnb">Airbnb</option>
            <option value="Hotel">Hotel</option>
            <option value="Outro">Outro</option>
          </select>

          <h6>Localização:</h6>
          <input
            ref={inputRef}
            placeholder="Endereço"
            value={localization}
            onBlur={(e) => setLocalization(e.target.value)}
            required
          />

          <Rating>
            <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#ffd700" />
          </Rating>

          <button type="submit">Avançar</button>
        </form>
      </Wrapper>
    </>
  );
}
