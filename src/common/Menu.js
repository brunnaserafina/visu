import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearchAlt2, BiWorld } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdHomeFilled } from 'react-icons/md';
import styled from 'styled-components';

export default function Menu() {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState(false);

  function homeNavigate() {
    navigate('/Home');
  }

  function searchNavigate() {
    navigate('/Search');
  }

  function postNavigate() {
    navigate('/City');
  }

  function userNavigate() {
    navigate('/User');
  }

  return (
    <>
      <Wrapper>
        <MdHomeFilled onClick={homeNavigate} cursor={'pointer'} />
        <BiSearchAlt2 onClick={searchNavigate} cursor={'pointer'} />
        <AiOutlinePlus onClick={() => setNewPost(true)} cursor={'pointer'} />
        <BsFillPersonFill onClick={userNavigate} cursor={'pointer'} />
      </Wrapper>

      {newPost ? (
        <CreateNewPost>
          <div onClick={() => setNewPost(false)}>x</div>
          <h1>Faça uma postagem agora</h1>
          <button onClick={postNavigate}>
            <BiWorld />
            <p>POSTAR VIAGEM</p>
          </button>
        </CreateNewPost>
      ) : (
        <></>
      )}
    </>
  );
}

const CreateNewPost = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: white;
  bottom: 0;
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;

  h1 {
    font-weight: 500;
    font-size: 19px;
    margin-bottom: 10px;
  }

  div {
    position: absolute;
    top: 20%;
    left: 5vw;
    font-weight: 700;
    cursor: pointer;
  }

  button {
    border-radius: 10px;
    border: none;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #666666;
    font-size: 28px;
    cursor: pointer;
  }

  p {
    font-size: 15px;
    margin-left: 5px;
  }

  @media (min-width: 1000px) {
    left: 35%;
    top: 40%;
    width: 30vw;
    border-radius: 25px;
    background-color: #e5e5e5;

    button {
      background-color: #666666;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 100vw;
  height: 50px;
  font-size: 30px;

  @media (min-width: 1000px) {
    flex-direction: column;
    width: 50px;
    height: 100vh;
    left: 0;
  }
`;
