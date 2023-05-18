import React from 'react';
import { Container, AthleteContainer, AthleteHeader, HeaderContent, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import AthletesTable from './components/AthletesTable';


const Athletes: React.FC = () => {
  return (
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

};

export default Athletes;
