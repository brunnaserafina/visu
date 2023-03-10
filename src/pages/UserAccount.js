import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Menu from '../common/Menu';
import TravelInfo from '../common/TravelInfo';
import { getFavorites, getHistoric } from '../services/visu';

export default function UserAccount() {
  const [historic, setHistoric] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [viewHistoric, setViewHistoric] = useState(true);
  const [viewFavorite, setViewFavorite] = useState(false);
  const navigate = useNavigate();

  const name = JSON.parse(localStorage.getItem('visu')).name;
  const email = JSON.parse(localStorage.getItem('visu')).email;
  const indexAt = email.indexOf('@');
  const username = email.slice(0, indexAt);
  const photo = JSON.parse(localStorage.getItem('visu')).photo;
  const componentMap = viewHistoric ? historic : favorites;
  const message = viewHistoric ? 'postou' : 'favoritou';

  useEffect(() => {
    getHistoric()
      .catch(() => toast('Não foi possível carregar seu histórico. Tente novamente!'))
      .then((response) => {
        setHistoric(response.data);
      });
  }, []);

  useEffect(() => {
    getFavorites()
      .catch(() => toast('Não foi possível carregar suas postagens favoritas. Tente novamente!'))
      .then((response) => {
        setFavorites(response.data);
      });
  }, []);

  function viewFavorites() {
    setViewHistoric(false);
    setViewFavorite(true);
  }

  function viewHistory() {
    setViewFavorite(false);
    setViewHistoric(true);
  }

  function logout() {
    localStorage.clear();
    navigate('/');
  }

  return (
    <>
      <Logout onClick={logout}>Sair</Logout>
      <Wrapper>
        <ProfilePicture src={photo} />
        <h3>{name}</h3>
        <p>@{username}</p>

        <ContainerHistoric>
          <div onClick={viewHistory}>
            <HistoricComponent viewHistoric={viewHistoric}>Histórico</HistoricComponent>
          </div>
          <div onClick={viewFavorites}>
            <FavoriteComponent viewFavorite={viewFavorite}>Salvos</FavoriteComponent>
          </div>
        </ContainerHistoric>

        {componentMap.length === 0 ? (
          <Message>
            Você não {message} <br></br>nenhuma viagem ainda :(
          </Message>
        ) : componentMap === historic ? (
          historic.map((travel, index) => (
            <TravelInfo
              key={index}
              id={travel.id}
              name={travel.users.email}
              city={travel.city_destination}
              date={travel.date_start}
              avaliation={travel.avaliation}
              center={true}
            />
          ))
        ) : (
          favorites.map((travel, index) => (
            <TravelInfo
              key={index}
              id={travel.travels.id}
              name={travel.travels.users.email}
              city={travel.travels.city_destination}
              date={travel.travels.date_start}
              avaliation={travel.travels.avaliation}
              center={true}
            />
          ))
        )}
      </Wrapper>
      <Menu />
    </>
  );
}

const Logout = styled.div`
  width: 100vw;
  text-align: end;
  cursor: pointer;
  padding: 3vw;
  color: #666666;

  :hover {
    text-decoration: underline;
  }
`;

const Message = styled.p`
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;
`;

const ContainerHistoric = styled.span`
  margin-top: 8vh;
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  color: #666666;
  margin-bottom: 3vh;
`;

const HistoricComponent = styled.h2`
  text-decoration: ${(props) => (props.viewHistoric ? 'underline' : 'none')};
  cursor: pointer;

  @media (min-width: 1000px) {
    font-size: 21px;
  }
`;

const FavoriteComponent = styled.h2`
  text-decoration: ${(props) => (props.viewFavorite ? 'underline' : 'none')};
  cursor: pointer;

  @media (min-width: 1000px) {
    font-size: 21px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 22px;
    color: #666666;
    font-weight: 700;
    margin-bottom: 1vw;

    @media (min-width: 1000px) {
      font-size: 25px;
    }
  }

  p {
    color: #666666;

    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
  margin-top: 10vw;
  margin-bottom: 3vw;

  @media (min-width: 1000px) {
    margin-top: 5vh;

    width: 150px;
    height: 150px;
    border-radius: 75px;
  }
`;
