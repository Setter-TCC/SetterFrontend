import React from 'react';
import { Container, SettingsContainer, SettingsHeader, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import SettingsBody from './SettingsBody';

const Settings: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <SettingsContainer>
        <SettingsHeader>
          <HeaderTitle>Configurações</HeaderTitle>
        </SettingsHeader>
        <SettingsBody />
      </SettingsContainer>
    </Container>
  );
};

export default Settings;
