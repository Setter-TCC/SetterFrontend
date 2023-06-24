/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';

interface CashContextData {
  searchValue: string,
  setSearchValue(searchValue: string): void,
  cashAction: CashAction,
  setCoachPayment(): void,
  setMonthlyPayment(): void,
  setCashIn(): void,
  setCashOut(): void,
  setResetActions(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum CashActionType {
  DEFAULT = 'DEFAULT',
  COACH_PAYMENT = 'COACH_PAYMENT',
  MONTHLY_PAYMENT = 'MONTHLY_PAYMENT',
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
  RESET_ACTION = 'RESET_ACTION',
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
    cashAction,
    setCoachPayment,
    setMonthlyPayment,
    setCashIn,
    setCashOut,
    setResetActions,
    actionModalInfo,
    setActionModalInfo,
    searchValue,
    setSearchValue,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useCash(): CashContextData {
  return useContext(CashContext);
}
export { CashContext, CashProvider, useCash };
