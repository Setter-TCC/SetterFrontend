import React, { useState } from 'react';
import { Container, EventsOption, EventSelect, PresenceHeaderContainer, OptionsButtons, ButtonsWrapper } from './styles';
import { EventData, EventType, eventTypeText } from '../utils/interfaces';
import { useEvent } from '../../../hooks/Event';
import EventsInfoModal from '../../../components/EventsInfoModal';


const EventsHeader: React.FC = () => {
  const { actionModalInfo, listEvents, setFilteredEvents, setAddTrainning, setAddGame, setAddOther } = useEvent();
  const [selected, setSelected] = useState('allEvents');
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (key: string) => {
    setSelected(key);

    const actionMapping: { [key: string]: EventData[] } = {
      allEvents: listEvents,
      filterOther: listEvents.filter((event) => event.type === EventType.other),
      filterGame: listEvents.filter((event) => event.type === EventType.game),
      filterTraining: listEvents.filter((event) => event.type === EventType.trainning),
    };

    const selectedAction = actionMapping[key];
    if (selectedAction) {
      setFilteredEvents(selectedAction);
    }
  };

  const eventsOptions = [
    { label: 'Todos', key: 'allEvents' },
    { label: 'Treinos', key: 'filterTraining' },
    { label: 'Jogos', key: 'filterGame' },
    { label: 'Outros', key: 'filterOther' },
  ];

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <Container>
      <PresenceHeaderContainer>
        <EventSelect>
          {eventsOptions.map((option) => (
            <EventsOption
              key={option.key}
              isSelected={selected === option.key}
              onClick={() => handleClick(option.key)}
            >
              {option.label}
            </EventsOption>
          ))}
        </EventSelect>
        <ButtonsWrapper isClicked={showOptions}>
          <button
            type="button"
            className="new-event"
            onClick={handleButtonClick}
          >
            Novo Evento
          </button>
          {showOptions && (
            <OptionsButtons>
              <button onClick={() => setAddTrainning(false)}>
                {eventTypeText(EventType.trainning)}
              </button>
              <button onClick={() => setAddGame(false)} >
                {eventTypeText(EventType.game)}
              </button>
              <button onClick={() => setAddOther(false)} >
                {eventTypeText(EventType.other)}
              </button>
            </OptionsButtons>
          )}
        </ButtonsWrapper>
      </PresenceHeaderContainer>
      {actionModalInfo && <EventsInfoModal text={actionModalInfo.text} setResetActions={actionModalInfo.setResetActions} />}
    </Container>
  );
};

export default EventsHeader;
