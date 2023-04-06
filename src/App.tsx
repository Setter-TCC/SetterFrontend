import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from './styles/global';
import LandingPage from './pages/LandingPage';

export default function AppRouter() {
  return (
    <>
      <Global />
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}