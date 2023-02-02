import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import PostContext from '../../contexts/PostContext';
import { Wrapper } from '../../common/WrapperPost';

export default function Date() {
  const navigate = useNavigate();
  const { dateStart, setDateStart } = useContext(PostContext);
  const { dateEnd, setDateEnd } = useContext(PostContext);

  function submit(event) {
    event.preventDefault();

    navigate('/Spending');
  }

  return (
    <Wrapper>
      <div>📅</div>

      <form onSubmit={submit}>
        <h1>Quando você foi viajar?</h1>
        <input type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} required></input>

        <h1>Qual o último dia de viagem?</h1>
        <input type="date" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} required></input>

        <button type="submit">OK</button>
      </form>
    </Wrapper>
  );
}
