import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from './styles/global';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import AccountCreated from './pages/AccountCreated';
import Athletes from './pages/Athletes';
import Cash from './pages/Cash';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import { AuthProvider } from './auth/AuthContext';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' Component={LandingPage} />
            <Route path='/signup' Component={SignUp} />
            <Route path='/signin' Component={SignIn} />
            <Route path='/success' Component={AccountCreated} />
            <Route path='/athletes' Component={Athletes} />
            <Route path='/cash' Component={Cash} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}