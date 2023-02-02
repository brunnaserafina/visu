import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';

export default function Summary() {
  const { summary, setSummary } = useContext(PostContext);
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    navigate('/Finish');
  }

  return (
    <Wrapper>
      <div>💬</div>

      <h1>Escreva mais sobre</h1>
      <h1>sua experiência</h1>

      <form onSubmit={submit}>
        <textarea
          placeholder="Escreva aqui"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        ></textarea>

        <button type="submit">OK</button>
      </form>
    </Wrapper>
  );
}
