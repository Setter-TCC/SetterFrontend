import React from 'react';
import { ExtractTitle, MonthCashBodyContainer } from './styles';
import ExtractTable, { Transaction } from './ExtractTable';

const transactions: Transaction[] = [
  {
    data: '01/01/2021',
    valor: -100,
    tipo: 'Pagamento do Técnico',
    origem: 'Salário',
    destino: 'Conta Corrente',
  },
  {
    data: '01/01/2021',
    valor: 100,
    tipo: 'Mensalidade',
    origem: 'Salário',
    destino: 'Conta Corrente',
  },
  {
    data: '01/01/2021',
    valor: 100,
    tipo: 'Ganho',
    origem: 'Salário',
    destino: 'Conta Corrente',
  },
  {
    data: '01/01/2021',
    valor: 100,
    tipo: 'Outras Despesas',
    origem: 'Salário',
    destino: 'Conta Corrente',
  },
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

