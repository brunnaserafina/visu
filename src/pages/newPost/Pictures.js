import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Pictures() {
  const [componentCount, setComponentCount] = useState(1);
  const navigate = useNavigate();

  function removeComponent() {
    if (componentCount === 1) {
      return;
    } else {
      setComponentCount(componentCount - 1);
    }
  }

  function nextPage() {
    navigate('/Summary');
  }

  return (
    <Wrapper>
      <div>📸</div>
      <h1>Adicione fotos</h1>
      <h1>da sua viagem</h1>

      <span>
        <button onClick={() => setComponentCount(componentCount + 1)}>+</button>
        <button onClick={removeComponent}>-</button>
      </span>

      {Array.from({ length: componentCount }, (_, index) => (
        <MultipliedComponent key={index} />
      ))}
      <p>*Resposta não obrigatória</p>
      <button onClick={nextPage}>OK</button>
    </Wrapper>
  );
}

function MultipliedComponent() {
  return (
    <>
      <label for="arquivo">Enviar foto</label>
      <input type="file" name="arquivo" id="arquivo" />
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

  span > button {
    background-color: #d55e58;
    margin-left: 5px;
    margin-bottom: 10px;
  }

  select {
    width: 60vw;
    border: none;
    border-radius: 15px;
    height: 30px;
    text-align: center;
    margin-bottom: 10px;
    color: #666666;
  }

  div {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input[type='file'] {
    display: none;
  }

  input,
  label {
    margin-top: 8px;
    margin-bottom: 5px;
    height: 30px;
    width: 60vw;
    border: none;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  button {
    margin-top: 8px;
    color: white;
    border: none;
    background-color: #666666;
    font-size: 18px;
    font-weight: 700;
  }
`;
