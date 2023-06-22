import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from './routes/Routes';
import RefreshTokenHandler from './auth/RefreshTokenHandler';
import { Global } from './styles/global';
import { AuthProvider } from './auth/AuthContext';
import { AthleteProvider } from './hooks/Athlete';
import { SettingsProvider } from './hooks/Settings';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <AuthProvider>
          <RefreshTokenHandler>
            <AthleteProvider>
              <SettingsProvider>
                <RenderRoutes />
              </SettingsProvider>
            </AthleteProvider>
          </RefreshTokenHandler>
        </AuthProvider>
      </Router>
    </>
  );
}
