import logo from '../assets/images/giphy.gif';
import styled from 'styled-components';

export default function Welcome() {
  return (
    <Wrapper>
      <img alt="logo" src={logo} />
      <MarqueeText>VISU</MarqueeText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 250px;
    align-self: flex-start;
  }
`;

const MarqueeText = styled.h1`
  color: #ff707a;
  font-size: 45px;
  font-weight: 700;
  animation-duration: 5s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;
