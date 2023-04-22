import React from 'react';
import { Container, Body } from './styles';
import team from '../../assets/images/team.svg';
import Header from '../../components/Header';
import Login from './Login';
import { buttons } from './utils/const';

const SignIn: React.FC = () => {

  return (
    <Container>
      <Header buttons={buttons} />
      <Body>
        <Login />
        <img className='team-work' src={team} />
      </Body>
    </Container>
  );
};

export default SignIn;
