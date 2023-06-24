import React from 'react';
import MonthCashHeader from '../components/MonthCashHeader';
import MonthCashBody from '../components/MonthCashBody';
import PendingAthletes from '../components/PendingAthletes';
import { MonthCashContainer, MonthCashContainerWrapper } from './styles';


const MonthCash: React.FC = () => {
  return (
    <MonthCashContainerWrapper>
      <MonthCashContainer>
        <MonthCashHeader />
        {/* <MonthCashBody /> */}
      </MonthCashContainer>
      {/* <PendingAthletes /> */}
    </MonthCashContainerWrapper>
  );
};

export default MonthCash;
