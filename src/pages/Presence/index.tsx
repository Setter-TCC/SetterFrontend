import React from 'react';
import { PresenceBody, PresenceContainer, PresenceContainerHeader, Container, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import MonthPicker from '../../components/MonthPicker';
import PresenceHeader from './PresenceHeader';

const Presence: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <PresenceContainer>
        <PresenceContainerHeader>
          <HeaderTitle>Presença</HeaderTitle>
        </PresenceContainerHeader>
        <PresenceBody>
          <MonthPicker />
          <PresenceHeader />
          {/* <MonthCash /> */}
        </PresenceBody>
      </PresenceContainer>
    </Container>
  );
};

export default Presence;
