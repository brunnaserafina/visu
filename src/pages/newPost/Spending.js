import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Spending() {
  const navigate = useNavigate();

  function nextPage() {
    navigate('/');
  }
  return (
    <>
      <Wrapper>
        <div>💰</div>

        <h1>Quanto você gastou?</h1>

        <input type="number" placeholder="R$"></input>
        <p>*Resposta não obrigatória</p>

        <button onClick={nextPage}>OK</button>
      </Wrapper>
    </>
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

  input {
    color: red;
    height: 30px;
    width: 60vw;
    border: none;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
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
