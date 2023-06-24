import React from 'react';
import { ExtractTableBody, ExtractTableBodyTd, ExtractTableContainer, ExtractTableHeader, RowTypeTransaction, RowValue } from './styles';
import { Transaction, transactionTypeText } from '../../utils/interfaces';

interface ExtractTableProps {
  transactions: Transaction[];
}

const formatCurrency = (value: number) => {
  const absoluteValue = Math.abs(value);
  return absoluteValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const ExtractTable: React.FC<ExtractTableProps> = ({ transactions }) => {
  return (
    <ExtractTableContainer>
      <ExtractTableHeader>
        <tr>
          <th>Data</th>
          <th>Valor</th>
          <th>Tipo de Transação</th>
          <th>Origem</th>
          <th></th>
          <th>Destino</th>
        </tr>
      </ExtractTableHeader>
      <ExtractTableBody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <ExtractTableBodyTd>{transaction.date}</ExtractTableBodyTd>
            <RowValue isNegative={transaction.value < 0}>
              {`${transaction.value > 0 ? '+' : '-'} ${formatCurrency(transaction.value)}`}
            </RowValue>
            <RowTypeTransaction isNegative={transaction.value < 0}>
              <div>{transactionTypeText(transaction.type)}</div>
            </RowTypeTransaction>
            <ExtractTableBodyTd>{transaction.origin}</ExtractTableBodyTd>
            <ExtractTableBodyTd> {'--->'} </ExtractTableBodyTd>
            <ExtractTableBodyTd>{transaction.destiny}</ExtractTableBodyTd>
          </tr>
        ))}
      </ExtractTableBody>
    </ExtractTableContainer>
  );
};

export default ExtractTable;
