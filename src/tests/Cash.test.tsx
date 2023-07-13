import { render } from '@testing-library/react';
import ExtractTable from '../pages/Cash/components/ExtractTable';
import { Transaction, TransactionType, transactionTypeText } from '../pages/Cash/utils/interfaces';

const mockTransactions: Transaction[] = [
  {
    date: '2022-01-01',
    value: 100,
    type: TransactionType.cashIn,
    origin: 'Salary',
    destiny: 'Bank Account',
  },
  {
    date: '2022-01-02',
    value: -50,
    type: TransactionType.cashOut,
    origin: 'Shopping',
    destiny: 'Store',
  },
];

describe('Extract Table', () => {
  it('should correctly render the empty table', () => {
    const { getByText } = render(<ExtractTable transactions={[]} />);
    const emptyExtractElement = getByText('Não há transações cadastradas neste mês');
    expect(emptyExtractElement).toBeInTheDocument();
  });

  it('should correctly render the transaction table', () => {
    const { getByText } = render(<ExtractTable transactions={mockTransactions} />);

    expect(getByText('Data')).toBeInTheDocument();
    expect(getByText('Valor')).toBeInTheDocument();
    expect(getByText('Tipo de Transação')).toBeInTheDocument();
    expect(getByText('Origem')).toBeInTheDocument();
    expect(getByText('Destino')).toBeInTheDocument();

    mockTransactions.forEach((transaction) => {
      expect(getByText(transaction.date)).toBeInTheDocument();
      expect(getByText(transactionTypeText(transaction.type))).toBeInTheDocument();
    });
  });
});
