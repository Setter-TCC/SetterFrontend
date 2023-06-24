import React from 'react';
import { ExtractTableBody, ExtractTableBodyTd, ExtractTableContainer, ExtractTableHeader, RowTypeTransaction, RowValue } from './styles';

export interface Transaction {
  data: string;
  valor: number;
  tipo: string;
  origem: string;
  destino: string;
}

interface ExtractTableProps {
  transactions: Transaction[];
}

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
            <ExtractTableBodyTd>{transaction.data}</ExtractTableBodyTd>
            <RowValue isNegative={transaction.valor < 0}>{`${transaction.valor > 0 ? '+' : '-'} R$ ${transaction.valor}`}</RowValue>
            <RowTypeTransaction isNegative={transaction.valor < 0}>
              <div>{transaction.tipo}</div>
            </RowTypeTransaction>
            <ExtractTableBodyTd>{transaction.origem}</ExtractTableBodyTd>
            <ExtractTableBodyTd> {'--->'} </ExtractTableBodyTd>
            <ExtractTableBodyTd>{transaction.destino}</ExtractTableBodyTd>
          </tr>
        ))}
      </ExtractTableBody>
    </ExtractTableContainer>
  );
};

export default ExtractTable;
