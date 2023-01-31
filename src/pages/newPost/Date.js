import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function City() {
  const navigate = useNavigate();

  function nextPage() {
    navigate('/Date');
  }

  return (
    <Wrapper>
      <div>📅</div>
      <h1>Em que dia você foi viajar?</h1>
      <input type="date"></input>
      <h1>Qual foi o último dia de viagem?</h1>
      <input type="date"></input>
      <button onClick={nextPage}>OK</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 10px;
    height: 30px;
    width: 60vw;
    border: none;
    border-radius: 15px;
    padding: 15px;
  }

  button {
    color: white;
    border: none;
    background-color: #666666;
    font-size: 18px;
    font-weight: 700;
  }
`;
