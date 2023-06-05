import React from 'react';
import { useAuth } from './auth/AuthContext';
import { Navigate, Route } from 'react-router-dom';
const { isAuthenticated } = useAuth();

export const PrivateRoutes = ({ isPrivate, ...rest }: any) => {
  if (isPrivate && !isAuthenticated) {
    return <Navigate to='/signin' />;
  }

  return <Route {...rest} />;
};