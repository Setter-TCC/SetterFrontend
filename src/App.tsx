import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from './routes/Routes';
import RefreshTokenHandler from './auth/RefreshTokenHandler';
import { Global } from './styles/global';
import { AuthProvider } from './auth/AuthContext';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <AuthProvider>
          <RefreshTokenHandler>
            <RenderRoutes />
          </RefreshTokenHandler>
        </AuthProvider>
      </Router>
    </>
  );
}
