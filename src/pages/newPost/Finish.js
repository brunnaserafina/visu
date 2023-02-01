import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';

export default function Finish() {
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  function nextPage() {
    navigate('/Pictures');
  }

  return (
    <Wrapper>
      <h1>Como você avalia</h1>
      <h1>sua viagem?</h1>

      <Stars>
        <ReactStars count={5} onChange={ratingChanged} size={40} activeColor="#ffd700" />
      </Stars>

      <button onClick={nextPage}>POSTAR</button>
    </Wrapper>
  );
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

  p {
    color: red;
  }

  div {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  textarea {
    width: 60vw;
    height: 30vw;
    border: none;
    border-radius: 15px;
    padding: 25px;
  }

  button {
    color: white;
    border: none;
    background-color: #666666;
    font-size: 18px;
    font-weight: 700;
    margin-top: 15px;
  }
`;
