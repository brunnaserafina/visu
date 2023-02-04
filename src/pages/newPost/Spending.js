import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Exit from '../../common/Exit';

import { Wrapper } from '../../common/WrapperPost';
import PostContext from '../../contexts/PostContext';

export default function Spending() {
  const navigate = useNavigate();
  const { spent, setSpent } = useContext(PostContext);

  function submit(event) {
    event.preventDefault();

    navigate('/Attractions');
  }

  return (
    <>
      <Exit />
      <Wrapper>
        <div>💰</div>

        <h1>Quanto você gastou?</h1>

        <form onSubmit={submit}>
          <input
            type="number"
            placeholder="R$"
            value={spent}
            onChange={(e) => setSpent(e.target.value)}
            required
          ></input>

          <button type="submit">Avançar</button>
        </form>
      </Wrapper>
    </>
  );
}
