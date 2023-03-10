import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

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

    @media (min-width: 1000px) {
      width: 20vw;
    }
  }

  p {
    color: red;
    margin-top: -10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    font-size: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;

    @media (min-width: 1000px) {
      font-size: 22px;
    }
  }

  input {
    margin-bottom: 15px;
    height: 30px;
    width: 60vw;
    border: none;
    border-radius: 15px;
    padding: 15px;
    text-align: center;

    @media (min-width: 1000px) {
      width: 20vw;
    }
  }

  button {
    color: white;
    border: none;
    background-color: #666666;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    border-radius: 10px;
    padding: 5px 10px;
  }

  h6 {
    color: #666666;
    margin-top: 13px;
    margin-bottom: 3px;
  }

  textarea {
    width: 60vw;
    height: 30vw;
    border: none;
    border-radius: 15px;
    padding: 25px;

    @media (min-width: 1000px) {
      width: 30vw;
      height: 40vh;
    }
  }
`;
