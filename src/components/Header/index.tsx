import React from 'react';
import { Container, Buttons, LogoBox, LogoName } from './styles';
import Button from '../Button';
import logo from '../../assets/icons/logo.svg';


const SetterFeatures: React.FC = () => {

  return (
    <Container>
      <LogoBox>
        <img src={logo} />
        <LogoName>Setter</LogoName>
      </LogoBox>
      <Buttons>
        <Button text='Criar Time' backgroundColor='#FFFFFF' textColor='#046E8F' isFull={false} />
        <Button text='Entrar' backgroundColor='#046E8F' textColor='#FFFFFF' isFull={true} />
      </Buttons>
    </Container>
  )
}

export default SetterFeatures;
