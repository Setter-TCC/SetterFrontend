import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from './routes/Routes';
import RefreshTokenHandler from './auth/RefreshTokenHandler';
import { Global } from './styles/global';
import { AuthProvider } from './auth/AuthContext';
import { AthleteProvider } from './hooks/Athlete';
import { SettingsProvider } from './hooks/Settings';
import { CashProvider } from './hooks/Cash';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <AuthProvider>
          <RefreshTokenHandler>
            <AthleteProvider>
              <SettingsProvider>
                <CashProvider>
                  <RenderRoutes />
                </CashProvider>
              </SettingsProvider>
            </AthleteProvider>
          </RefreshTokenHandler>
        </AuthProvider>
      </Router>
    </>
  );
}
