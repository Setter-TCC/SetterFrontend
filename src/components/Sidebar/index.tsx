import React from 'react';
import { Container, LogoImage, Logout } from './styles';
import NavLink from '../NavLink';
import { SidebarData, logoutIcon } from '../utils/const';
import logo from '../../assets/icons/logo.svg';

const Sidebar: React.FC = () => {

  return (
    <Container>
      <LogoImage src={logo} />
      {SidebarData.map(data =>
        <NavLink key={data.title} navData={data} isSelected={window.location.pathname == data.path} />
      )}
      <Logout>
        <NavLink navData={logoutIcon} isSelected={window.location.pathname == logoutIcon.path} />
      </Logout>
    </Container>
  );
};

export default Sidebar;
