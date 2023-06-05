import React from 'react';
import { Container, CreateImage, Body, CallText } from './styles';
import Header from '../../../components/Header';
import { buttons } from '../utils/const';
import createAccount from '../../../assets/images/createAccount.svg';

const SignUpCall: React.FC = () => {

  return (
    <Container>
      <Header
        buttons={buttons}
      />
      <Body>
        <CreateImage src={createAccount} />
        <CallText>Tenha seu time de voleibol no seu controle</CallText>
      </Body>
    </Container>
  );
};

export default SignUpCall;
