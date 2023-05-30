import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from './routes/Routes';
import RefreshTokenHandler from './auth/RefreshTokenHandler';
import { Global } from './styles/global';
import { AuthProvider } from './auth/AuthContext';
import { AthleteProvider } from './hooks/Athlete';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <AuthProvider>
          <RefreshTokenHandler>
            <AthleteProvider>
              <RenderRoutes />
            </AthleteProvider>
          </RefreshTokenHandler>
        </AuthProvider>
      </Router>
    </>
  );
}
