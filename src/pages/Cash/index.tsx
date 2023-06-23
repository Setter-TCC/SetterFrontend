import React from 'react';
import { CashContainer, CashHeader, Container, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import MonthPicker from '../../components/MonthPicker';

const Cash: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <CashContainer>
        <CashHeader>
          <HeaderTitle>Fluxo de Caixa</HeaderTitle>
        </CashHeader>
        <MonthPicker />
      </CashContainer>
    </Container>
  );
};

export default Cash;
