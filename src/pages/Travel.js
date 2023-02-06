import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../common/Menu';
import { getFavorite, getTravelInfo, postFavorite, removeFavorite } from '../services/visu';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { numberStarsByAvaliation } from '../common/TravelInfo';
import { RiArrowDownSFill } from 'react-icons/ri';

export default function Travel() {
  const { id } = useParams();
  const [travelInfo, setTravelInfo] = useState([]);

  useEffect(() => {
    getTravelInfo(id)
      .catch((response) => console.log(response))
      .then((response) => {
        setTravelInfo(response.data);
      });
  }, []);

  return (
    <>
      <Wrapper>
        {travelInfo.map((travel, index) => (
          <ComponentTravel
            key={index}
            idTravel={id}
            id={travel.id}
            name={travel.users.name}
            cityOrigin={travel.city_origin}
            city={travel.city_destination}
            date={travel.date_start}
            avaliation={travel.avaliation}
            restaurants={travel.restaurants}
            attractions={travel.attractions}
            accommodations={travel.accommodations[0]}
            picture={travel.pictures[0].picture}
            spent={travel.spent}
            summary={travel.summary}
            center={true}
          />
        ))}
      </Wrapper>
      <Menu />
    </>
  );
}

function ComponentTravel({
  name,
  avaliation,
  cityOrigin,
  city,
  picture,
  accommodations,
  spent,
  summary,
  restaurants,
  attractions,
  idTravel,
}) {
  const [favorite, setFavorite] = useState(false);
  const [openRestaurant, setOpenRestaurant] = useState(true);
  const [openAttractions, setOpenAttractions] = useState(true);
  const rating = numberStarsByAvaliation(avaliation);

  useEffect(() => {
    getFavorite(idTravel)
      .catch()
      .then((response) => {
        if (response.data[0] === null) {
          setFavorite(false);
        } else {
          setFavorite(true);
        }
      });
  }, []);

  function favoriteSubmit() {
    if (favorite) {
      removeFavorite(idTravel)
        .catch((response) => console.log(response))
        .then(() => {
          setFavorite(false);
        });
    } else {
      postFavorite(idTravel)
        .catch((response) => console.log(response))
        .then(() => {
          setFavorite(true);
        });
    }
  }

  return (
    <WrapperComponentTravel>
      <Favorite onClick={favoriteSubmit}>{favorite ? <AiFillHeart /> : <AiOutlineHeart />}</Favorite>

      <NameAvaliation>
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
      </NameAvaliation>

      <Cities>
        <span>
          <h2>
            <b>Origem: </b>
          </h2>
          <h2>{cityOrigin.replace(', Brasil', '').replace(',', ' -')}</h2>
        </span>
        <span>
          <h2>Destino:</h2>
          <h2>{city.replace(', Brasil', '').replace(',', ' -')}</h2>
        </span>
      </Cities>

      <div>
        <img src={picture} />
      </div>

      <Accommodation>
        <span>
          <h2>
            <b>Estadia:</b> {accommodations.type}
          </h2>
          <h2>
            <b>Localização:</b> {accommodations.localization}
          </h2>
        </span>
        <span>
          <h2>
            <b>Investimento:</b>
          </h2>
          <p>R${spent}</p>
        </span>
      </Accommodation>

      <Restaurant onClick={() => setOpenRestaurant(!openRestaurant)}>
        {openRestaurant ? (
          <>
            <h2>Restaurantes:</h2>
            <p>
              <RiArrowDownSFill />
            </p>
          </>
        ) : (
          <div>
            <h3>Restaurantes:</h3>
            {restaurants.map((restaurant, index) => (
              <Display key={index}>
                <h5>{restaurant.name}</h5> <span>{numberStarsByAvaliation(restaurant.avaliation)}</span>
              </Display>
            ))}
          </div>
        )}
      </Restaurant>

      <Restaurant onClick={() => setOpenAttractions(!openAttractions)}>
        {openAttractions ? (
          <>
            <h2>Pontos turísticos:</h2>
            <p>
              <RiArrowDownSFill />
            </p>
          </>
        ) : (
          <div>
            <h3>Pontos turísticos:</h3>
            {attractions.map((restaurant, index) => (
              <Display key={index}>
                <h5>{restaurant.name}</h5> <span>{numberStarsByAvaliation(restaurant.avaliation)}</span>
              </Display>
            ))}
          </div>
        )}
      </Restaurant>

      <MoreInfo>
        <h2>
          <b>Mais informações:</b>
        </h2>
        <h4>{summary}</h4>
      </MoreInfo>
    </WrapperComponentTravel>
  );
}

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 82vw;
  margin-bottom: 1px;
  height: 25px;
  padding: 1vw;
  height: max-content;



  @media (min-width: 1000px) {
    width: 38vw;
  }
`;

const Restaurant = styled.div`
  width: 90vw;
  margin-bottom: 2vh;
  height: min-content;
  background-color: #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  @media (min-width: 1000px) {
    width: 40vw;
  }

  p {
    font-size: 35px;
  }

  > div {
    display: flex;
    flex-direction: column;
    height: max-content;
  }

  h2 {
    font-weight: 700;
  }

  div > h3 {
    margin-top: 2vw;
    font-weight: 700;
  }

  h6 {
    text-align: end;
    display: flex;
  }
`;

const MoreInfo = styled.div`
  width: 90vw;

  h2 {
    margin-bottom: 4px;
  }

  @media (min-width: 1000px) {
    width: 40vw;
  }
`;

const Accommodation = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 90vw;

  p {
    text-align: end;
  }

  @media (min-width: 1000px) {
    width: 40vw;
  }
`;

const Favorite = styled.span`
  margin-bottom: 2vh;
  font-size: 35px;
  color: #ff707a;
  margin-top: 3vh;
  cursor: pointer;
`;

const NameAvaliation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  padding: 0 5vw;
  font-size: 19px;
  margin-bottom: 1vh;
  width: 100vw;

  @media (min-width: 1000px) {
    width: 50vw;
  }

  h1 {
    text-align: start;
    width: 60%;
    text-transform: uppercase;
  }
`;

const Rating = styled.div`
  text-align: center;
  width: 40%;
`;

const Cities = styled.div`
  margin-bottom: 2vh;
  line-height: 19px;
  display: flex;
  padding: 0 5vw;
  width: 100vw;
  justify-content: space-between;

  @media (min-width: 1000px) {
    width: 50vw;
  }

  span:nth-child(1) {
    padding: 5px;
  }

  span:nth-child(2) {
    background-color: #ff707a;
    color: white;
    font-weight: 700;
    padding: 5px;
    text-align: end;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 1000px) {
    width: 40vw;
  }

  b {
    font-weight: 700;
  }
`;

const WrapperComponentTravel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 90vw;
    height: 30vh;
    border-radius: 20px;
    object-fit: cover;

    @media (min-width: 1000px) {
      width: 40vw;
    }
  }

  @media (min-width: 1000px) {
    width: 60vw;
  }
`;
