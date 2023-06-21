import React from 'react';
import { CashContainer, CashHeader, Container, HeaderTitle } from './styles';
import Sidebar from '../../components/Sidebar';
import GenerateCashMonth from './GenerateMonth';
import FirstMonth from './GenerateMonth/FirstMonth';

const Cash: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <CashContainer>
        <CashHeader>
          <HeaderTitle>Fluxo de Caixa</HeaderTitle>
        </CashHeader>
        <FirstMonth />
      </CashContainer>
    </Container>
  );
};

export default Cash;
