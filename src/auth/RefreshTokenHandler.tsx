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
      const { data } = await api.get(`/api/token/refresh?token=${localStorage.getItem('refresh')}`);
      logIn(data.token);
    } catch (error) {
      console.error('Failed to refresh tokens:', error);
    }
  };

  useEffect(() => {
    const refreshTokenInterval = setInterval(refreshTokens, 30 * 60 * 1000);
    return () => clearInterval(refreshTokenInterval); // TODO: ver se isso funciona
  }, []);

  return <>{children}</>;
};

export default RefreshTokenHandler;
