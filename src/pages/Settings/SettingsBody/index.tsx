import React, { useState } from 'react';
import { Container, SettingsOption, SettingsSelect } from './styles';
import TeamSettings from '../SettingsOptions/Team';
import AdminSettings from '../SettingsOptions/Admin';
import CoachSettings from '../SettingsOptions/Coach';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const renderConfigs: RenderConfigOptions = {
  teamSettings: <TeamSettings />,
  adminSettings: <AdminSettings />,
  coachSettings: <CoachSettings />,
};

const SettingsBody: React.FC = () => {
  const [selected, setSelected] = useState('teamSettings');

  const handleOptionClick = (key: string) => {
    setSelected(key);
  };

  const settingsOptions = [
    { label: 'Conta do Time', key: 'teamSettings' },
    { label: 'Meu Perfil', key: 'adminSettings' },
    { label: 'Técnico', key: 'coachSettings' },
  ];

  return (
    <Container>
      <SettingsSelect>
        {settingsOptions.map((option) => (
          <SettingsOption
            key={option.key}
            isSelected={selected === option.key}
            onClick={() => handleOptionClick(option.key)}
          >
            {option.label}
          </SettingsOption>
        ))}
      </SettingsSelect>

      {renderConfigs[selected]}
    </Container>
  );
};

export default SettingsBody;
