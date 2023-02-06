import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';
import { Rating } from '../../common/Rating';
import Exit from '../../common/Exit';
import dayjs from 'dayjs';
import { postNewTravel } from '../../services/visu';

export default function Finish() {
  const navigate = useNavigate();
  const { setAvaliation } = useContext(PostContext);
  let {
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
    reset,
  } = useContext(PostContext);

  const dateStartFormat = dayjs(dateStart).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  const dateEndFormat = dayjs(dateEnd).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  const body = {
    cityOrigin,
    cityDestination,
    dateStart: dateStartFormat,
    dateEnd: dateEndFormat,
    spent: Number(spent),
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
    postNewTravel(body)
      .catch((response) => console.log(response))
      .then(() => navigate('/Home'));
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
