import React, { useEffect, useState } from 'react';
import { Container, EventsOption, EventSelect, PresenceHeaderContainer, OptionsButtons, ButtonsWrapper } from './styles';
import { useSettings } from '../../../hooks/Settings';
import { EventType, eventTypeText } from '../utils/interfaces';
import { set } from 'date-fns';
import { useEvent } from '../../../hooks/Event';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

// const renderConfigs: RenderConfigOptions = {
//   editTeam: <TeamSettings />,
//   editAdmin: <AdminSettings />,
//   editCoach: <CoachSettings />,
//   deactivateCoach: <DeactivateCoach />,
// };

const EventsHeader: React.FC = () => {
  const { setListEvents, setFilterTrainning, setFilterGame,
    setFilterOther, setAddTrainning, setAddGame, setAddOther } = useEvent();
  const [selected, setSelected] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (key: string) => {
    setSelected(key);

    const actionMapping: { [key: string]: () => void } = {
      listEvents: setListEvents,
      filterOther: setFilterOther,
      filterGame: setFilterGame,
      filterTrainning: setFilterTrainning,
    };

    const selectedAction = actionMapping[key];
    if (selectedAction) {
      selectedAction();
    }
  };

  const eventsOptions = [
    { label: 'Treinos', key: 'filterTraining' },
    { label: 'Jogos', key: 'filterGames' },
    { label: 'Outros', key: 'filterOthers' },
  ];

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    setListEvents();
  }, []);

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
              <button onClick={setAddTrainning}>
                {eventTypeText(EventType.trainning)}
              </button>
              <button onClick={setAddGame} >
                {eventTypeText(EventType.game)}
              </button>
              <button onClick={setAddOther} >
                {eventTypeText(EventType.other)}
              </button>
            </OptionsButtons>
          )}
        </ButtonsWrapper>
      </PresenceHeaderContainer>
      {/* {actionModalInfo && <SettingsInfoModal text={actionModalInfo.text} setResetActions={actionModalInfo.setResetActions} />}
      {!actionModalInfo && settingsAction && renderConfigs[settingsAction.showAction]} */}
    </Container>
  );
};

export default EventsHeader;
