import React from 'react';
import { Container, Body, Title, CreatedAccountImage } from './styles';
import accountCreated from '../../assets/images/accountCreated.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { IButton } from '../../components/utils/interfaces';

const accessButton: IButton = {
  backgroundColor: 'var(--color-primary-blue)',
  isFull: true,
  path: '/team',
  text: 'Acessar Equipe',
  textColor: 'var(--color-primary-white)'
};

const AccountCreated: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Body>
        <Title>Conta criada com sucesso!</Title>
        <CreatedAccountImage src={accountCreated} />
        <Button
          text={accessButton.text}
          backgroundColor={accessButton.backgroundColor}
          isFull={accessButton.isFull}
          textColor={accessButton.textColor}
          path={accessButton.path}
          onClick={() => navigate(accessButton.path)}
        />
      </Body>
    </Container>
  );
};

export default AccountCreated;
