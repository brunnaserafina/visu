import { MdHomeFilled } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();

  function homeNavigate() {
    navigate('/Home');
  }

  return (
    <Wrapper>
      <MdHomeFilled onClick={homeNavigate} />
      <BiSearchAlt2 />
      <AiOutlinePlus />
      <BsFillPersonFill />
    </Wrapper>
  );
}

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
`;
