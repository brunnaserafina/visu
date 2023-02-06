import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import styled from 'styled-components';

export default function TravelInfo({ index, id, name, city, date, avaliation, center }) {
  const [alignLeft, setAlignLeft] = useState(false);
  const navigate = useNavigate();

  const indexAt = name.indexOf('@');
  const usernameByEmail = name.slice(0, indexAt);

  const dateFormat = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
  const starsRating = numberStarsByAvaliation(avaliation);

  const idTravel = Number(index);

  useEffect(() => {
    if (idTravel % 2 === 0) {
      setAlignLeft(true);
    }
  }, []);

  function openTravelPage() {
    navigate(`/Travel/${id}`);
  }

  return (
    <Container alignLeft={alignLeft} center={center} onClick={openTravelPage}>
      <span>
        <p>@{usernameByEmail}</p>
        <h1>{city.replace(', Brasil', '').replace(',', ' -')}</h1>
        <h2>{dateFormat}</h2>
        <>{starsRating}</>
      </span>
    </Container>
  );
}

export function numberStarsByAvaliation(avaliation) {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < avaliation) {
      stars.push(<RiStarSFill />);
    } else {
      stars.push(<RiStarSLine />);
    }
  }

  return (
    <Stars>
      {stars.map((star, index) => (
        <div key={index}>{star}</div>
      ))}
    </Stars>
  );
}

const Stars = styled.h5`
  color: #ff707a;
  font-size: 22px;
  display: flex;
  justify-content: end;
`;

const Container = styled.div`
  cursor: pointer;
  padding: 0 7vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : props.alignLeft ? 'flex-start' : 'flex-end')};

  h1 {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  p {
    color: #52b6ff;
  }

  h2 {
    text-decoration: underline;
  }

  span {
    width: 45vw;
    background-color: white;
    height: 15vh;
    border-radius: 25px;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 1000px) {
      width: 25vw;
    }
  }

  @media (min-width: 1000px) {
    width: 60vw;
  }
`;
