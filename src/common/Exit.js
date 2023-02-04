import styled from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';

export default function Exit() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Wrapper onClick={openModal}>x</Wrapper>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <Confirm>
          <span>Descartar alterações?</span>

          <div>
            <button onClick={closeModal}>Cancelar</button>
            <button onClick={closeModal}>Confirmar</button>
          </div>
        </Confirm>
      </Modal>
    </>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#52b6ff',
    borderRadius: '20px',
  },
};

const Wrapper = styled.div`
  position: fixed;
  top: 5vh;
  left: 10vw;
  font-size: 22px;
  color: #666666;
`;

const Confirm = styled.div`
  width: 55vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;

  button {
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    padding: 5px;
    font-weight: 500;
  }

  button:nth-child(1) {
    background-color: #ff707a;
  }

  button:nth-child(2) {
    background-color: #90ee90;
  }
`;
