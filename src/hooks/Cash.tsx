/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';
import { AthleteData } from '../pages/Athletes/components/utils/interfaces';

interface CashContextData {
  selectedMonth: MonthCash,
  setSelectedMonth(month: MonthCash): void,
  selectedAthlete: AthleteData,
  setSelectedAthlete(athlete: AthleteData): void,
  searchValue: string,
  setSearchValue(searchValue: string): void,
  cashAction: CashAction,
  setCoachPayment(): void,
  setMonthlyPayment(): void,
  setSelectAthlete(): void,
  setCashIn(): void,
  setCashOut(): void,
  setResetActions(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum CashActionType {
  DEFAULT = 'DEFAULT',
  COACH_PAYMENT = 'COACH_PAYMENT',
  SELECT_ATHELETE = 'SELECT_ATHELETE',
  MONTHLY_PAYMENT = 'MONTHLY_PAYMENT',
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
  RESET_ACTION = 'RESET_ACTION',
}

interface MonthCash {
  month: number,
  year: number,
}

interface CashAction {
  showAction: string,
}

interface ActionModalInfo {
  text: string,
}

const athleteActionInitialState: CashAction = {
  showAction: '',
};

const cashReducer = (state: CashAction, action: any) => {
  switch (action.type) {
  case CashActionType.COACH_PAYMENT:
    return {
      ...state,
      showAction: 'coachPayment',
    };
  case CashActionType.SELECT_ATHELETE:
    return {
      ...state,
      showAction: 'selectAthlete',
    };
  case CashActionType.MONTHLY_PAYMENT:
    return {
      ...state,
      showAction: 'monthlyPayment',
    };
  case CashActionType.CASH_IN:
    return {
      ...state,
      showAction: 'cashIn',
    };
  case CashActionType.CASH_OUT:
    return {
      ...state,
      showAction: 'cashOut',
    };
  case CashActionType.RESET_ACTION:
    return {
      showAction: '',
    };
  default:
    return state;
  }
};

const CashContext = createContext({} as CashContextData);
const { Provider } = CashContext;

const CashProvider = ({ children }: any): JSX.Element => {

  const [searchValue, setSearchValue] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<MonthCash>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  } as MonthCash);

  const [selectedAthlete, setSelectedAthlete] = useState<AthleteData>({} as AthleteData);

  const [cashAction, setCashAction] = useReducer(
    cashReducer,
    athleteActionInitialState,
  );
  const [actionModalInfo, setActionModalInfo] = useState<ActionModalInfo | null>(null);

  const setCoachPayment = () => {
    setCashAction({
      type: CashActionType.COACH_PAYMENT,
      payload: {},
    });
  };

  const setSelectAthlete = () => {
    setCashAction({
      type: CashActionType.SELECT_ATHELETE,
      payload: {},
    });
  };

  const setMonthlyPayment = () => {
    setCashAction({
      type: CashActionType.MONTHLY_PAYMENT,
      payload: {},
    });
  };

  const setCashIn = () => {
    setCashAction({
      type: CashActionType.CASH_IN,
      payload: {},
    });
  };


  const setCashOut = () => {
    setCashAction({
      type: CashActionType.CASH_OUT,
      payload: {},
    });
  };

  const setResetActions = () => {
    setCashAction({
      type: CashActionType.RESET_ACTION,
      payload: {},
    });
  };


  const contextValues = {
    selectedMonth,
    setSelectedMonth,
    cashAction,
    setCoachPayment,
    setSelectAthlete,
    setMonthlyPayment,
    setCashIn,
    setCashOut,
    setResetActions,
    actionModalInfo,
    setActionModalInfo,
    searchValue,
    setSearchValue,
    selectedAthlete,
    setSelectedAthlete,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useCash(): CashContextData {
  return useContext(CashContext);
}
export { CashContext, CashProvider, useCash };
