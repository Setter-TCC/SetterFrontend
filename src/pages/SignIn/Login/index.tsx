import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../auth/AuthContext';
import { ButtonWrapper, Container, LoginButton, LoginWrapper } from './styles';
import { LoginData, translateLoginData } from '../utils/interfaces';
import api from '../../../services/api';


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  } as LoginData);
  const { logIn } = useAuth();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const backLoginData: string = translateLoginData(loginData);

    try {
      const { data } = await api.post('/api/account/login', backLoginData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      logIn(data.auth);
      navigate('/athletes');
    } catch (err) {
      alert('Usuário ou senha incorretos!');
      navigate('/');
    }
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <LoginWrapper>
          <label htmlFor="username">Nome do usuário</label>
          <input
            id="username"
            required
            type="text"
            value={loginData.username}
            onChange={e => setLoginData({ username: e.target.value, password: loginData.password })}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            required
            type="password"
            value={loginData.password}
            onChange={e => setLoginData({ username: loginData.username, password: e.target.value })}
          />
        </LoginWrapper>
        <ButtonWrapper>
          <LoginButton type="submit">Entrar</LoginButton>
        </ButtonWrapper>
      </form>
    </Container>
  );

};


export default LoginForm;
