import React from 'react';
import { BalanceMonth, BalanceMonthWrapper, ButtonsWrapper, MonthCashHeaderContainer } from './styles';


const MonthCashHeader: React.FC = () => {
  return (
    <MonthCashHeaderContainer>
      <BalanceMonthWrapper>
        <BalanceMonth>
          <h3>Saldo Atual</h3>
          <h1>R$ 1.250,00</h1>
        </BalanceMonth>
        <BalanceMonth>
          <h4>Saldo Anterior</h4>
          <h2>R$ 1.020,00</h2>
        </BalanceMonth>
      </BalanceMonthWrapper>
      <ButtonsWrapper>
        <button type="button"
        // onClick={() => setShowForm(true)}
        >
          Nova Transação
        </button>
      </ButtonsWrapper>
    </MonthCashHeaderContainer>
  );
};

export default MonthCashHeader;

