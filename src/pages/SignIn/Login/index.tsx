import React, { FormEvent, useState } from 'react';
import { FormWrapper } from '../../../components/FormWrapper/index';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, Container, LoginButton, LoginWrapper } from './styles';
import { useAuth } from '../../../auth/AuthContext';


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useAuth();


  function onSubmit(e: FormEvent) {
    e.preventDefault();
    logIn();
    // TODO: context de user logado
    navigate('/athletes');
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <LoginWrapper>
          {/* <FormWrapper title="Entrar em sua conta" inputBackgroundColor='var(--color-background)'> */}
          <label>Nome do usuário</label>
          <input
            required
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>Senha</label>
          <input
            required
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {/* </FormWrapper> */}
        </LoginWrapper>
        <ButtonWrapper>
          <LoginButton type="submit">Entrar</LoginButton>
        </ButtonWrapper>
      </form>
    </Container>
  );

};


export default LoginForm;
