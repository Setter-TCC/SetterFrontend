import React from 'react';
import { Container, AthleteContainer, AthleteHeader, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import AthletesTable from './components/AthleteTable';


const Athletes: React.FC = () => (
  <Container>
    <Sidebar />
    <AthleteContainer>
      <AthleteHeader>
        <HeaderTitle>Atletas</HeaderTitle>
      </AthleteHeader>
      <AthletesTable />
    </AthleteContainer>
  </Container>
);

export default Athletes;
