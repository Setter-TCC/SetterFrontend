import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from './styles/global';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/signup' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}