import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../common/Menu';
import { getTravels } from '../services/visu';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

export default function Home() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    getTravels()
      .catch((response) => console.log(response))
      .then((response) => {
        setTravels(response.data);
      });
  }, []);

  return (
    <>
      {travels.map((travel, index) => (
        <TravelInfo
          key={index}
          id={travel.id}
          name={travel.users.email}
          city={travel.city_destination}
          date={travel.date_start}
          avaliation={travel.avaliation}
        />
      ))}

      <Menu />
    </>
  );
}

function TravelInfo({ id, name, city, date, avaliation }) {
  const [alignLeft, setAlignLeft] = useState(false);

  const indexAt = name.indexOf('@');
  const usernameByEmail = name.slice(0, indexAt);

  const dateFormat = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
  const starsRating = numberStarsByAvaliation(avaliation);

  const idTravel = Number(id);

  useEffect(() => {
    if (idTravel % 2 === 0) {
      setAlignLeft(true);
    }
  }, []);

  return (
    <Container alignLeft={alignLeft}>
      <span>
        <p>@{usernameByEmail}</p>
        <h1>{city}</h1>
        <h2>{dateFormat}</h2>
        <>{starsRating}</>
      </span>
    </Container>
  );
}

function numberStarsByAvaliation(avaliation) {
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

const Stars = styled.div`
  color: #ff707a;
  font-size: 22px;
  display: flex;
`;

const Container = styled.div`
  cursor: pointer;
  padding: 0 10vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignLeft ? 'flex-start' : 'flex-end')};

  h1 {
    font-weight: 700;
  }

  p{
    color: #52b6ff;
  }

  h2{
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
  }
`;
