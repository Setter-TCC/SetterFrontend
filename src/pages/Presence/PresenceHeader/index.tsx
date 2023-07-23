import React, { useEffect, useState } from 'react';
import { Container, EventsOption, EventSelect, PresenceHeaderContainer, OptionsButtons, ButtonsWrapper } from './styles';
import { useSettings } from '../../../hooks/Settings';
import { EventType, eventTypeText } from '../utils/interfaces';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

// const renderConfigs: RenderConfigOptions = {
//   editTeam: <TeamSettings />,
//   editAdmin: <AdminSettings />,
//   editCoach: <CoachSettings />,
//   deactivateCoach: <DeactivateCoach />,
// };

const PresenceHeader: React.FC = () => {
  const {
    settingsAction,
    actionModalInfo,
    setEditAdmin,
    setEditCoach,
    setEditTeam,
  } = useSettings();

  const [selected, setSelected] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (key: string) => {
    setSelected(key);

    // const actionMapping: { [key: string]: () => void } = {
    //   editTeam: setEditTeam,
    //   editAdmin: setEditAdmin,
    //   editCoach: setEditCoach,
    // };

    // const selectedAction = actionMapping[key];
    // if (selectedAction) {
    //   selectedAction();
    // }
  };

  const eventsOptions = [
    { label: 'Treinos', key: 'filterTraining' },
    { label: 'Jogos', key: 'filterGames' },
    { label: 'Outros', key: 'filterOthers' },
  ];

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  // useEffect(() => {
  //   setEditTeam();
  // }, []);

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
              <button
              // onClick={setSelectAthlete}
              >
                {eventTypeText(EventType.trainning)}
              </button>
              <button
              // onClick={setCoachPayment}
              >
                {eventTypeText(EventType.game)}
              </button>
              <button
              // onClick={setCashIn}
              >
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

export default PresenceHeader;
