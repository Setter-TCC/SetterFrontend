import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';
import { suits } from '../../SignUp/utils/const';
import { TeamData, translateEditTeamData } from '../utils/interfaces';
import { tranlatedTeamTemplate, teamDataTemplate } from '../utils/const';
import { useSettings } from '../../../hooks/Settings';


const TeamSettings: React.FC = () => {
  const { setActionModalInfo, setResetToEditTeam } = useSettings();
  const [teamData, setTeamData] = useState<TeamData>({} as TeamData);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const teamDataBack = translateEditTeamData(teamDataTemplate, teamData);
      console.log(teamDataBack);
      setActionModalInfo({
        text: 'Time alterado com sucesso!',
        setResetActions: setResetToEditTeam
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SettingsForm onSubmit={onSubmit}>
        <SettingsFormBox>
          <Column>
            <InputWrapper>
              <label htmlFor="name">Nome do Time</label>
              <input
                type="text"
                id="name"
                defaultValue={tranlatedTeamTemplate.name || ''}
                value={teamData.name}
                onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">Email do Time</label>
              <input
                type="email"
                id="email"
                defaultValue={tranlatedTeamTemplate.email || ''}
                value={teamData.email}
                onChange={(e) => setTeamData({ ...teamData, email: e.target.value })}
              />
            </InputWrapper>

          </Column>
          <Column>
            <InputWrapper>
              <label htmlFor="cnpj">CNPJ do Time</label>
              <InputMask
                mask="99.999.999/9999-99"
                id="cnpj"
                type="text"
                defaultValue={tranlatedTeamTemplate.cnpj || ''}
                value={teamData.cnpj}
                onChange={(e) => setTeamData({ ...teamData, cnpj: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="suit">Naipe do Time</label>
              <select
                defaultValue={tranlatedTeamTemplate.suit || 1}
                value={teamData.suit}
                onChange={(e) => setTeamData({ ...teamData, suit: Number(e.target.value) })}
              >
                {suits.map(suit => (
                  <option key={suit.type} value={suit.type}>{suit.name}</option>
                ))}
              </select>
            </InputWrapper>
          </Column>
        </SettingsFormBox>
        <Buttons>
          <button className="save" type="submit">Salvar Alterações</button>
        </Buttons>
      </SettingsForm>
    </Container>
  );
};

export default TeamSettings;
