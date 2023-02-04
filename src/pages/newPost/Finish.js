import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';
import { Rating } from '../../common/Rating';
import Exit from '../../common/Exit';

export default function Finish() {
  const navigate = useNavigate();
  const { setAvaliation } = useContext(PostContext);
  const {
    cityOrigin,
    cityDestination,
    dateStart,
    dateEnd,
    spent,
    summary,
    avaliation,
    attractions,
    restaurants,
    accommodation,
    picture,
  } = useContext(PostContext);

  const body = {
    cityOrigin,
    cityDestination,
    dateStart,
    dateEnd,
    spent,
    summary,
    avaliation,
    attractions,
    restaurants,
    accommodation,
    picture,
  };

  const ratingChanged = (newRating) => {
    setAvaliation(newRating);
  };

  function nextPage() {
    navigate('/');
  }

  return (
    <>
      <Exit />
      <Wrapper>
        <h1>Como você avalia</h1>
        <h1 style={{ marginBottom: '25px' }}>sua viagem?</h1>

        <Rating>
          <ReactStars count={5} onChange={ratingChanged} size={40} activeColor="#ffd700" />
        </Rating>

        <button onClick={nextPage}>POSTAR</button>
      </Wrapper>
    </>
  );
}