import { formatDateTimezone } from '../../../utils/format';

export interface Transaction {
  date: string;
  name?: string
  description?: string;
  value: number;
  type: TransactionType;
  origin: string | null;
  destiny: string | null;
  teamId?: string;
  personId?: string | null;
}

export interface TransactionBackData {
  id?: string,
  nome?: string,
  descricao?: string,
  data_acontecimento: string,
  tipo: TransactionType,
  valor: number,
  origem?: string,
  destino?: string,
  time_id: string,
  pessoa_id: string | null,
}

export enum TransactionType {
  monthlyPayment = 1,
  coachPayment = 2,
  cashOut = 3,
  cashIn = 4,
}

export const translateTransactionToBackData = (data: Transaction): TransactionBackData => {

  const transaction: TransactionBackData = {
    nome: data.name || '',
    descricao: data.description || '',
    data_acontecimento: formatDateTimezone(data.date),
    tipo: data.type,
    valor: data.value,
    time_id: data.teamId || '',
    pessoa_id: data.personId || null,
  };

  return transaction;
};

export const translateTransactionToFrontData = (data: TransactionBackData[]): Transaction[] => {
  const transactions: Transaction[] = data.map((transaction) => {
    return {
      date: transaction.data_acontecimento,
      name: transaction.nome,
      description: transaction.descricao,
      value: transaction.valor,
      type: transaction.tipo,
      origin: transaction.origem || '',
      destiny: transaction.destino || '',
    };
  });

  return transactions;
};

export const transactionTypeText = (value: TransactionType): string => {
  const transactionTypes: { [key in TransactionType]: string } = {
    [TransactionType.monthlyPayment]: 'Mensalidade',
    [TransactionType.coachPayment]: 'Pagamento de Técnico',
    [TransactionType.cashIn]: 'Entrada de Caixa',
    [TransactionType.cashOut]: 'Saída de Caixa',
  };

  return transactionTypes[value];
};
