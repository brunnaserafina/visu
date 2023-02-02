import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AutoComplete from 'react-google-autocomplete';
import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';

export default function City() {
  const navigate = useNavigate();
  const { setCityOrigin, setCityDestination } = useContext(PostContext);

  function submit(event) {
    event.preventDefault();
    navigate('/Date');
  }

  return (
    <Wrapper>
      <div>🌎</div>
      <form onSubmit={submit}>
        <h1>De que cidade você saiu?</h1>
        <AutoComplete
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          type="text"
          onPlaceSelected={(place) => setCityOrigin(place.formatted_address)}
          required
        />

        <h1>Para qual cidade você foi?</h1>
        <AutoComplete
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          type="text"
          onPlaceSelected={(place) => setCityDestination(place.formatted_address)}
          required
        />
        <button type="submit">OK</button>
      </form>
    </Wrapper>
  );
}
