import React, { FormEvent, useState } from 'react';
import { FormWrapper } from '../../../components/FormWrapper/index';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, Container, LoginButton } from './styles';
import { useAuth } from '../../../auth/AuthContext';


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useAuth();


  function onSubmit(e: FormEvent) {
    e.preventDefault();
    logIn();
    navigate('/athletes');
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <FormWrapper title="Entrar em sua conta" inputBackgroundColor='var(--color-background)'>
          <label>Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <input
            required
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormWrapper>
        <ButtonWrapper>
          <LoginButton type="submit">Entrar</LoginButton>
        </ButtonWrapper>
      </form>
    </Container>
  );

};


export default LoginForm;
