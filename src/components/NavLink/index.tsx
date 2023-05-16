import React from 'react';
import { NavBox } from './styles';
import { ISidebarData } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

interface NavLinkProps {
  navData: ISidebarData,
  isSelected: boolean,
}

const NavLink: React.FC<NavLinkProps> = ({ navData, isSelected }) => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleNavigate = () => {
    if (navData.title === 'Sair') {
      logOut();
      navigate(navData.path);
    } else {
      navigate(navData.path);
    }
  };

  return (
    <NavBox
      onClick={handleNavigate}
      isSelected={isSelected}
      navColor={navData.navColor}
      navFilter={navData.navFilter}
    >
      <img src={navData.icon} />
      <p>{navData.title}</p>
    </NavBox>
  );
};

export default NavLink;
