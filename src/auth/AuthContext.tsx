/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface TokenProps {
  token: string,
  expire: Date,
}
interface AuthContextData {
  isAuthenticated: boolean,
  logIn(token: TokenProps): void,
  logOut(): void,
}


const AuthContext = createContext({} as AuthContextData);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const logIn = ({ token, expire }: TokenProps) => {
    //chamada da api para autenticar o token
    localStorage.setItem('token', token);
    localStorage.setItem('token_expire_time', expire.toString());
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setIsAuthenticated(true);

  };
  const logOut = () => {
    //chamada da api para deletar o token
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('token_expire_time');
    api.defaults.headers.Authorization = '';
  };

  if (loading) {
    // TODO: desenhar tela de loading
    <h1>Loading...</h1>;
  }


  const contextValues = {
    isAuthenticated,
    logIn,
    logOut
  };

  return (
    <Provider value={contextValues}>
      {children}
    </Provider>
  );

};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export { AuthContext, AuthProvider, useAuth };