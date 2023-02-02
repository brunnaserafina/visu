import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Wrapper } from '../../common/WrapperPost';
import PostContext from '../../contexts/PostContext';

export default function Pictures() {
  const { picture, setPicture } = useContext(PostContext);
  const navigate = useNavigate();
  const re = /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i;

  function submit(event) {
    event.preventDefault();

    if (!re.test(picture)) {
      toast('Insira uma URL de imagem válida');
      return;
    }

    navigate('/Summary');
  }

  return (
    <Wrapper>
      <div>📸</div>
      <h1>Adicione uma</h1>
      <h1>foto da sua viagem</h1>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="https://"
          value={picture}
          onChange={(e) => {
            setPicture(e.target.value);
          }}
          required
        />
        <button type="submit">OK</button>
      </form>
    </Wrapper>
  );
}
