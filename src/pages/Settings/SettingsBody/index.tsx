import React, { useState } from 'react';
import { Container, SettingsOption, SettingsSelect } from './styles';
import TeamSettings from '../SettingsOptions/Team';
import AdminSettings from '../SettingsOptions/Admin';
import CoachSettings from '../SettingsOptions/Coach';
import DeactivateCoach from '../SettingsOptions/DeactivateCoach';
import { useSettings } from '../../../hooks/Settings';
import SettingsInfoModal from '../../../components/SettingsInfoModal';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const renderConfigs: RenderConfigOptions = {
  editTeam: <TeamSettings />,
  editAdmin: <AdminSettings />,
  editCoach: <CoachSettings />,
  deactivateCoach: <DeactivateCoach />,
};

const SettingsBody: React.FC = () => {
  const {
    settingsAction,
    actionModalInfo,
    setEditAdmin,
    setEditCoach,
    setEditTeam,
  } = useSettings();

  const [selected, setSelected] = useState('editTeam');

  const handleClick = (key: string) => {
    setSelected(key);

    const actionMapping: { [key: string]: () => void } = {
      editTeam: setEditTeam,
      editAdmin: setEditAdmin,
      editCoach: setEditCoach,
    };

    const selectedAction = actionMapping[key];
    if (selectedAction) {
      selectedAction();
    }
  };

  const settingsOptions = [
    { label: 'Conta do Time', key: 'editTeam' },
    { label: 'Meu Perfil', key: 'editAdmin' },
    { label: 'Técnico', key: 'editCoach' },
  ];

  return (
    <Container>
      <SettingsSelect>
        {settingsOptions.map((option) => (
          <SettingsOption
            key={option.key}
            isSelected={selected === option.key}
            onClick={() => handleClick(option.key)}
          >
            {option.label}
          </SettingsOption>
        ))}
      </SettingsSelect>
      {actionModalInfo && <SettingsInfoModal text={actionModalInfo.text} setResetActions={actionModalInfo.setResetActions} />}
      {!actionModalInfo && settingsAction && renderConfigs[settingsAction.showAction]}
    </Container>
  );
};

export default SettingsBody;
