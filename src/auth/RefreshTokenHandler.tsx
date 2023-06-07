/* eslint-disable react/prop-types */
import { ReactNode, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

interface RefreshTokenHandlerProps {
  children: ReactNode;
}

const RefreshTokenHandler: React.FC<RefreshTokenHandlerProps> = ({ children }) => {
  const { logIn } = useAuth();

  const refreshTokens = async () => {
    try {
      if (!localStorage.getItem('refresh')) return;

      const response = await api.post('/api/token/refresh', {
        refresh: localStorage.getItem('refresh')
      });

      const { token } = response.data;
      localStorage.setItem('token', token.token);
      localStorage.setItem('refresh', token.refresh);
      logIn(token);
    } catch (error) {
      console.error('Failed to refresh tokens:', error);
    }
  };

  useEffect(() => {
    const refreshTokenInterval = setInterval(refreshTokens, 30 * 60 * 1000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(refreshTokenInterval); // TODO: ver se isso funciona
  }, []);

  return <>{children}</>;
};

export default RefreshTokenHandler;
