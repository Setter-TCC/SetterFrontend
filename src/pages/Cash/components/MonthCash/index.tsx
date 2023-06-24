import React from 'react';
import MonthCashHeader from './MonthCashHeader';
import MonthCashBody from './MonthCashBody';
import { MonthCashContainer, MonthCashContainerWrapper } from './styles';
import MonthlyPayment from '../TransactionActions/MonthlyPayment';
import CoachPayment from '../TransactionActions/CoachPayment';
import CashIn from '../TransactionActions/CashIn';
import CashOut from '../TransactionActions/CashOut';
import { useCash } from '../../../../hooks/Cash';
import InfoModal from '../../../../components/InfoModal';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const MonthCash: React.FC = () => {
  const { cashAction, actionModalInfo } = useCash();

  const renderConfigs: RenderConfigOptions = {
    monthlyPayment: <MonthlyPayment />,
    coachPayment: <CoachPayment />,
    cashIn: <CashIn />,
    cashOut: <CashOut />,
  };


  return (
    <MonthCashContainerWrapper>
      {cashAction && renderConfigs[cashAction.showAction]}
      {actionModalInfo && <InfoModal text={actionModalInfo.text} />}
      <MonthCashContainer>
        <MonthCashHeader />
        <MonthCashBody />
      </MonthCashContainer>
    </MonthCashContainerWrapper>
  );
};

export default MonthCash;
