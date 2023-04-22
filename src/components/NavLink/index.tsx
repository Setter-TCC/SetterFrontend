import React from 'react';
import { NavBox } from './styles';
import { ISidebarData } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';

interface NavLinkProps {
  navData: ISidebarData,
  isSelected: boolean,
}

const NavLink: React.FC<NavLinkProps> = ({ navData, isSelected }) => {
  const navigate = useNavigate();

  return (
    <NavBox
      onClick={() => navigate(navData.path)}
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
