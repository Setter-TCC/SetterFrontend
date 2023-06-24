import React from 'react';

import { Container, ContainerBackground } from './styles';
import SelectAthlete from '../SelectAthlete';

const MonthlyPayment: React.FC = () => {
  return (
    <ContainerBackground>
      <Container>
        <h2>Adicionar Mensalidade</h2>
        <SelectAthlete />

      </Container>
    </ContainerBackground>
  );

};

export default MonthlyPayment;
