import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from './styles/global';
import { AuthProvider } from './auth/AuthContext';
import { RenderRoutes } from './routes/Routes';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <AuthProvider>
          <RenderRoutes />
        </AuthProvider>
      </Router>
    </>
  );
}