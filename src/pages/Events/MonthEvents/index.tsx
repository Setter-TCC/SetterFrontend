import React from 'react';
import { MonthEventContainer, MonthEventContainerWrapper } from './styles';
import { useEvent } from '../../../hooks/Event';
import AddTrainning from '../PresenceActions/AddTrainning';
import AddGame from '../PresenceActions/AddGame';
import AddOther from '../PresenceActions/AddOther';
import EventsHeader from './MonthEventsHeader';
import MonthEventsBody from './MonthEventsBody';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const MonthEvents: React.FC = () => {
  const { presenceAction } = useEvent();

  const renderConfigs: RenderConfigOptions = {
    addTrainning: <AddTrainning />,
    addGame: <AddGame />,
    addOther: <AddOther />,
  };


  return (
    <MonthEventContainerWrapper>
      <MonthEventContainer>
        {presenceAction && renderConfigs[presenceAction.showAction]}
        <EventsHeader />
        <MonthEventsBody />
      </MonthEventContainer>
    </MonthEventContainerWrapper>
  );
};

export default MonthEvents;
