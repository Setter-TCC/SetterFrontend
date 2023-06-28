/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../auth/AuthContext';
import { useCash } from '../../../../hooks/Cash';
import { BalanceMonth, BalanceMonthWrapper, ButtonsWrapper, MonthCashHeaderContainer, OptionsButtons } from './styles';
import { TransactionType, transactionTypeText } from '../../utils/interfaces';
import { formatCurrency } from '../../../../utils/format';
import api from '../../../../services/api';


const MonthCashHeader: React.FC = () => {
  const { admin } = useAuth();
  const [totalBalance, setTotalBalance] = useState(0);
  const [lastBalance, setLastBalance] = useState(0);
  const { selectedMonth, setCashIn, setCashOut, setCoachPayment, setSelectAthlete, actionModalInfo } = useCash();
  const [showOptions, setShowOptions] = useState(false);

  const getMonthBalance = async () => {
    try {
      const { data } = await api.get(`/api/transaction/balance?team_id=${admin.teamId}&month=${selectedMonth?.month}&year=${selectedMonth?.year}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTotalBalance(data.value.totalBalance);
      setLastBalance(data.value.lastBalance);
    } catch (error: any) {
      if (error.response.status === 404) {
        return;
      }
      console.log(error.response.data);
    }
  };

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    getMonthBalance();
    setShowOptions(false);
  }, [selectedMonth, actionModalInfo]);

  return (
    <MonthCashHeaderContainer>
      <BalanceMonthWrapper>
        <BalanceMonth>
          <h3>Saldo Atual</h3>
          <h1>{formatCurrency(totalBalance)}</h1>
        </BalanceMonth>
        <BalanceMonth>
          <h4>Saldo Anterior</h4>
          <h2>{formatCurrency(lastBalance)}</h2>
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
