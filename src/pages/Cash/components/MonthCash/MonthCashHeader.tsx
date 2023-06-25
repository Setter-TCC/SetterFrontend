import React, { useState } from 'react';
import { BalanceMonth, BalanceMonthWrapper, ButtonsWrapper, MonthCashHeaderContainer, OptionsButtons } from './styles';
import { TransactionType, transactionTypeText } from '../../utils/interfaces';
import { useCash } from '../../../../hooks/Cash';


const MonthCashHeader: React.FC = () => {
  const { setCashIn, setCashOut, setCoachPayment, setSelectAthlete } = useCash();
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

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
      <ButtonsWrapper isClicked={showOptions}>
        <button
          type="button"
          className="new-transaction"
          onClick={handleButtonClick}
        >
          Nova Transação
        </button>
        {showOptions && (
          <OptionsButtons>
            <button
              onClick={setSelectAthlete}>
              {transactionTypeText(TransactionType.monthlyPayment)}
            </button>
            <button
              onClick={setCoachPayment}>
              {transactionTypeText(TransactionType.coachPayment)}
            </button>
            <button
              onClick={setCashIn}>
              {transactionTypeText(TransactionType.cashIn)}
            </button>
            <button
              onClick={setCashOut}>
              {transactionTypeText(TransactionType.cashOut)}
            </button>
          </OptionsButtons>
        )}
      </ButtonsWrapper>
    </MonthCashHeaderContainer>
  );
};

export default MonthCashHeader;
