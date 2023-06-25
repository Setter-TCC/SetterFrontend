import React from 'react';
import { Transaction } from '../../utils/interfaces';
import { ExtractTitle, MonthCashBodyContainer } from './styles';
import ExtractTable from '../ExtractTable';

const transactions: Transaction[] = [
  // {
  //   date: '01/01/2021',
  //   value: -100,
  //   type: 2,
  //   origin: 'Salário',
  //   destiny: 'Conta Corrente',
  // },
  // {
  //   date: '01/01/2021',
  //   value: 100,
  //   type: 1,
  //   origin: 'Salário',
  //   destiny: 'Conta Corrente',
  // },
  // {
  //   date: '01/01/2021',
  //   value: 100,
  //   type: 3,
  //   origin: 'Salário',
  //   destiny: 'Conta Corrente',
  // },
  // {
  //   date: '01/01/2021',
  //   value: 100,
  //   type: 4,
  //   origin: 'Salário',
  //   destiny: 'Conta Corrente',
  // },
];

const MonthCashBody: React.FC = () => {
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
