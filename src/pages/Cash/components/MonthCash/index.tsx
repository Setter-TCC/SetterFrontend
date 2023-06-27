import React from 'react';
import MonthCashHeader from './MonthCashHeader';
import MonthCashBody from './MonthCashBody';
import { MonthCashContainer, MonthCashContainerWrapper } from './styles';
import MonthlyPayment from '../TransactionActions/MonthlyPayment';
import CoachPayment from '../TransactionActions/CoachPayment';
import CashIn from '../TransactionActions/CashIn';
import CashOut from '../TransactionActions/CashOut';
import { useCash } from '../../../../hooks/Cash';
import SelectAthlete from '../TransactionActions/SelectAthlete';
import CashInfoModal from '../../../../components/CashModalInfo';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const MonthCash: React.FC = () => {
  const { cashAction, actionModalInfo } = useCash();

  const renderConfigs: RenderConfigOptions = {
    selectAthlete: <SelectAthlete />,
    monthlyPayment: <MonthlyPayment />,
    coachPayment: <CoachPayment />,
    cashIn: <CashIn />,
    cashOut: <CashOut />,
  };


  return (
    <MonthCashContainerWrapper>
      {cashAction && renderConfigs[cashAction.showAction]}
      {actionModalInfo && <CashInfoModal text={actionModalInfo.text} />}
      <MonthCashContainer>
        <MonthCashHeader />
        <MonthCashBody />
      </MonthCashContainer>
    </MonthCashContainerWrapper>
  );
};

export default MonthCash;
