export interface Transaction {
  date: string;
  value: number;
  type: TransactionType;
  origin: string;
  destiny: string;
}

export enum TransactionType {
  monthlyPayment = 1,
  coachPayment = 2,
  cashIn = 3,
  cashOut = 4,
}

export const transactionTypeText = (value: TransactionType): string => {
  const transactionTypes: { [key in TransactionType]: string } = {
    [TransactionType.monthlyPayment]: 'Mensalidade',
    [TransactionType.coachPayment]: 'Pagamento de Técnico',
    [TransactionType.cashIn]: 'Entrada de Caixa',
    [TransactionType.cashOut]: 'Saída de Caixa',
  };

  return transactionTypes[value];
};
