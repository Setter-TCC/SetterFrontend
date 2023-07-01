/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import ExtractTable from '../ExtractTable';
import { Transaction, translateTransactionToFrontData } from '../../utils/interfaces';
import { ExtractTitle, MonthCashBodyContainer } from './styles';
import api from '../../../../services/api';


const MonthCashBody: React.FC = () => {
  const { admin } = useAuth();
  const { selectedMonth, actionModalInfo } = useCash();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getMonthTransactions = async () => {
    try {
      const { data } = await api.get(`/api/transaction/month?team_id=${admin.teamId}&month=${selectedMonth?.month}&year=${selectedMonth?.year}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      const frontTransactions = translateTransactionToFrontData(data.value);
      setTransactions(frontTransactions);
    } catch (error: any) {
      if (error.response.status === 404) {
        setTransactions([]);
      }
    }
  };

  useEffect(() => {
    getMonthTransactions();
  }, [selectedMonth, actionModalInfo]);

  return (
    <MonthCashBodyContainer>
      <ExtractTitle>
        <h3>Extrato</h3>
      </ExtractTitle>
      <ExtractTable transactions={transactions} />

    </MonthCashBodyContainer>
  );
};

export default MonthCashBody;
