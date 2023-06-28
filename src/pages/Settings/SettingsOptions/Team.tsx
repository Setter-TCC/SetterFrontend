import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useSettings } from '../../../hooks/Settings';
import { useAuth } from '../../../auth/AuthContext';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';
import { TeamData, transformTeamData, translateEditTeamData, translateTeamFrontData } from '../utils/interfaces';
import { suits } from '../../SignUp/utils/const';
import api from '../../../services/api';

const TeamSettings: React.FC = () => {
  const { setActionModalInfo, setResetToEditTeam } = useSettings();
  const [selectedTeamData, setSelectedTeamData] = useState<TeamData>({} as TeamData);
  const [newTeamData, setNewTeamData] = useState<TeamData>({} as TeamData);
  const { admin } = useAuth();

  const getTeam = async () => {
    const { data } = await api.get(`/api/team?team_id=${admin.teamId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const teamData = translateTeamFrontData(data.value);
    setSelectedTeamData(teamData);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const teamData = transformTeamData(selectedTeamData, newTeamData);
      const teamDataBack = translateEditTeamData(teamData);

      await api.put('/api/team/update', teamDataBack, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setActionModalInfo({
        text: 'Time alterado com sucesso!',
        setResetActions: setResetToEditTeam
      });
    } catch (err) {
      console.log(err);
      setActionModalInfo({
        text: 'Erro ao editar time!',
        setResetActions: setResetToEditTeam
      });
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  const renderTeam = () => {
    return (
      <Container>
        <SettingsForm onSubmit={onSubmit}>
          <SettingsFormBox>
            <Column>
              <InputWrapper>
                <label htmlFor="name">Nome do Time*</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={selectedTeamData.name}
                  value={newTeamData.name}
                  onChange={(e) => setNewTeamData({ ...newTeamData, name: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="email">Email do Time*</label>
                <input
                  type="email"
                  id="email"
                  disabled={true}
                  defaultValue={selectedTeamData.email}
                  value={newTeamData.email}
                  onChange={(e) => setNewTeamData({ ...newTeamData, email: e.target.value })}
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
                  defaultValue={selectedTeamData.cnpj}
                  value={newTeamData.cnpj}
                  onChange={(e) => setNewTeamData({ ...newTeamData, cnpj: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="suit">Naipe do Time*</label>
                <select
                  defaultValue={selectedTeamData.suit || 1}
                  value={newTeamData.suit}
                  onChange={(e) => setNewTeamData({ ...newTeamData, suit: Number(e.target.value) })}
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

  return (
    <>
      {selectedTeamData.id && renderTeam()}
    </>
  );
};

export default TeamSettings;
