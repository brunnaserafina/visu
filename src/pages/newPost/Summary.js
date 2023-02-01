import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Summary() {
  const navigate = useNavigate();

  function nextPage() {
    navigate('/Finish');
  }

  return (
    <Wrapper>
      <div>💬</div>

      <h1>Escreva mais sobre</h1>
      <h1>sua experiência</h1>

      <textarea placeholder="Escreva aqui"></textarea>

      <button onClick={nextPage}>OK</button>
    </Wrapper>
  );
}

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
