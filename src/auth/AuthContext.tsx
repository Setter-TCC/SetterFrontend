/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, useEffect } from 'react';
// import api from '../services/api';

interface AdminProps {
  teamId: string,
}
interface AuthProps {
  token: string,
  refresh: string,
  expire: Date,
  team_id?: string,
}
interface AuthContextData {
  admin: AdminProps,
  setAdmin(admin: AdminProps): void,
  isAuthenticated: boolean,
  logIn(auth: AuthProps): void,
  logOut(): void,
}

const AuthContext = createContext({} as AuthContextData);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({} as AdminProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const teamId = localStorage.getItem('teamId');

    if (token && teamId) {
      // api.defaults.headers.Authorization = `Bearer ${token}`;
      setIsAuthenticated(true);
      setAdmin({ teamId });
    }
    setLoading(false);
  }, []);

  const logIn = ({ token, expire, refresh, team_id }: AuthProps) => {
    //chamada da api para autenticar o token
    localStorage.setItem('token', token);
    localStorage.setItem('refresh', refresh);
    localStorage.setItem('token_expire_time', expire.toString());

    if (team_id) {
      localStorage.setItem('teamId', team_id);
      setAdmin({ teamId: team_id });
    }
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    setIsAuthenticated(true);

  };
  const logOut = () => {
    //chamada da api para deletar o token
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('token_expire_time');
    localStorage.removeItem('teamId');

    setAdmin({} as AdminProps);
    // api.defaults.headers.Authorization = '';
  };

  if (loading) {
    // TODO: desenhar tela de loading
    <h1>Loading...</h1>;
  }

  const contextValues = {
    isAuthenticated,
    logIn,
    logOut,
    setAdmin,
    admin,
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
