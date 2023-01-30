import logo from '../assets/images/logo-visu.png';

import { IoLogoGoogle } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';

import styled from 'styled-components';

export default function Login() {
  return (
    <Wrapper>
      <img alt="logo" src={logo} />

      <div>
        <IoLogoGoogle />
        Acesse com Google
      </div>

      <div>
        <GrMail />
        Acesse com e-mail
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    margin-bottom: 15px;
  }

  div {
    width: 220px;
    background-color: #d55e58;
    color: #ffffff;
    border-radius: 10px;
    margin-bottom: 10px;
    height: 35px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }

  & > :nth-child(3) {
    background-color: #697277;
  }
`;
