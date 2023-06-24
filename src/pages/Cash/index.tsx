import React from 'react';
import { CashBody, CashContainer, CashHeader, Container, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import MonthPicker from '../../components/MonthPicker';
import MonthCash from './MonthCash';

const Cash: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <CashContainer>
        <CashHeader>
          <HeaderTitle>Fluxo de Caixa</HeaderTitle>
        </CashHeader>
        <CashBody>
          <MonthPicker />
          <MonthCash />
        </CashBody>
      </CashContainer>
    </Container>
  );
};

export default Cash;
