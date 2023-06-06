import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { navigation } from './navigation';

export const RenderRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {
        navigation.map(({ path, element, name, isPrivate }) => {
          if (isPrivate && !isAuthenticated) {
            return false;
          }
          else if (!isPrivate) {
            return <Route key={name} path={path} element={element} />;
          }
          else {
            return <Route key={name} path={path} element={element} />;
          }
        })
      }
    </Routes>
  );

};
