import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoLogoGoogle } from 'react-icons/io';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../services/firebase';
import logo from '../assets/images/logo-visu.png';
import { postSignIn } from '../services/visu';

export default function Login() {
  const navigate = useNavigate('');

  const providerGoogle = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleGoogleLogin = async() => {
    try {
      const responseFirebase = await signInWithPopup(auth, providerGoogle);
      console.log(responseFirebase);

      postSignIn(responseFirebase.user.displayName, responseFirebase.user.email, responseFirebase.user.uid)
        .catch(() => {
          toast('Tente novamente!');
        })
        .then((response) => {
          localStorage.setItem(
            'visu',
            JSON.stringify({
              token: response.data.token,
              name: responseFirebase.user.displayName,
              photo: responseFirebase.user.photoURL,
              email: responseFirebase.user.email,
            })
          );
          navigate('/Home');
        });
    } catch (err) {
      toast('Não foi possível logar com sua conta. Tente novamente!');
    }
  };

  return (
    <Wrapper>
      <p>POSTE SUAS </p>
      <p>VIAGENS </p>
      <p>&</p>
      <img alt="logo" src={logo} />
      <p>INSPIRE-SE EM </p> <p>OUTRAS VIAGENS</p>
      <div onClick={handleGoogleLogin}>
        <IoLogoGoogle />
        Acesse com Google
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
    color: white;
  }

  img {
    width: 150px;
    margin-bottom: 15px;
  }

  div {
    width: 220px;
    background-color: #d55e58;
    color: #ffffff;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    height: 35px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }
`;
