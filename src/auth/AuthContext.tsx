import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextData {
  isAuthenticated: boolean,
  logIn(): void,
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
      // api.defaults.headers.Authorization = `Bearer ${token}`
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const logIn = () => {
    //chamada da api para autenticar o token
    const token = 'mock-token';
    localStorage.setItem('token', token);
    // api.defaults.headers.Authorization = `Bearer ${token}`
    setIsAuthenticated(true);

  };
  const logOut = () => {
    //chamada da api para deletar o token
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    // api.defaults.headers.Authorization = undefined
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