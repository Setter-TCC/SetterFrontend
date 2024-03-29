/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useAuth } from '../../../auth/AuthContext';
import { useSettings } from '../../../hooks/Settings';
import { CoachData, translateCoachBackData, translateCoachFrontData, transformCoachData } from '../utils/interfaces';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox, NotFoundContainer, NotFoundText, AddCoachButton, Loading } from './styles';
import notFoundImg from '../../../assets/images/notFound.svg';
import api from '../../../services/api';
import loadingImg from '../../../assets/icons/loading.svg';


const CoachSettings: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const { setDeactivateCoach, setActionModalInfo, setResetToEditCoach } = useSettings();
  const [showForm, setShowForm] = useState(false);
  const [selectedCoachData, setSelectedCoachData] = useState<CoachData>({} as CoachData);
  const [newCoachData, setNewCoachData] = useState<CoachData>({} as CoachData);
  const [loading, setLoading] = useState(false);
  const { admin } = useAuth();
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const getActiveCoach = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/coach/?team_id=${admin.teamId}`, { headers });
      const formattedCoach = translateCoachFrontData(data.value, admin.teamId);
      setSelectedCoachData(formattedCoach);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response.status === 404) {
        return null;
      }
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const coachData = transformCoachData(selectedCoachData, newCoachData, admin.teamId);

    if (coachData.endDate) {
      setDeactivateCoach(coachData);
    } else {

      const coachBackData = translateCoachBackData(coachData);

      if (coachBackData.id) {
        // Editar técnico do time
        try {
          await api.put('/api/coach/update', coachBackData, { headers });
          setActionModalInfo({ text: 'Técnico editado com sucesso!', setResetActions: setResetToEditCoach });
        } catch (err) {
          console.log(err);
          setActionModalInfo({ text: 'Erro ao editar técnico!', setResetActions: setResetToEditCoach });
        }
      } else {
        // Adicionar técnico ao time
        try {
          await api.post('/api/coach/create', coachBackData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          });
          setActionModalInfo({ text: 'Técnico criado com sucesso!', setResetActions: setResetToEditCoach });
        } catch (err) {
          console.log(err);
          setActionModalInfo({ text: 'Erro ao criar técnico!', setResetActions: setResetToEditCoach });
        }
      }
    }
  };

  useEffect(() => {
    getActiveCoach();
  }, []);

  const renderCoachForm = () => {
    return (
      <Container>
        <SettingsForm onSubmit={onSubmit}>
          <SettingsFormBox>
            <Column>
              <InputWrapper>
                <label>Nome*</label>
                <input
                  required
                  type="text"
                  id="name"
                  defaultValue={selectedCoachData.name || ''}
                  onChange={(e) => setNewCoachData({ ...newCoachData, name: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Email*</label>
                <input
                  type="email"
                  required
                  disabled={selectedCoachData.email ? true : false}
                  defaultValue={selectedCoachData.email}
                  onChange={(e) => setNewCoachData({ ...newCoachData, email: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Telefone*</label>
                <InputMask
                  mask="(99) 99999-9999"
                  id="phone"
                  type="text"
                  defaultValue={selectedCoachData.phone}
                  onChange={(e) => setNewCoachData({ ...newCoachData, phone: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Data de Entrada*</label>
                <input
                  required
                  type="date"
                  defaultValue={selectedCoachData.startDate}
                  max={today}
                  onChange={(e) => setNewCoachData({ ...newCoachData, startDate: e.target.value })}
                />
              </InputWrapper>
            </Column>
            <Column>
              <InputWrapper>
                <label>RG</label>
                <InputMask
                  mask="99.999.999-9"
                  id="rg"
                  type="text"
                  defaultValue={selectedCoachData.rg}
                  onChange={(e) => setNewCoachData({ ...newCoachData, rg: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>CPF</label>
                <InputMask
                  mask="999.999.999-99"
                  id="cpf"
                  type="text"
                  defaultValue={selectedCoachData.cpf}
                  onChange={(e) => setNewCoachData({ ...newCoachData, cpf: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>

                <label>CREF</label>
                <input
                  type="text"
                  defaultValue={selectedCoachData.cref}
                  onChange={(e) => setNewCoachData({ ...newCoachData, cref: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Data de Saída</label>
                <input
                  type="date"
                  defaultValue={selectedCoachData.endDate || ''}
                  max={today}
                  onChange={(e) => setNewCoachData({ ...newCoachData, endDate: e.target.value })}
                />
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
      {loading ? (
        <Loading>
          <img src={loadingImg} alt="loading" />
        </Loading>

      ) : (
        <>
          {selectedCoachData.isActive || showForm ? (
            <>
              {renderCoachForm()}
            </>
          ) : (
            <NotFoundContainer>
              <img src={notFoundImg} alt="Não há técnicos ativos no time" />
              <NotFoundText>Não há técnicos ativos no time!</NotFoundText>
              <AddCoachButton type="button"
                onClick={() => setShowForm(true)}
              >Adicionar Técnico</AddCoachButton>
            </NotFoundContainer>
          )}
        </>
      )}
    </>
  );
};


export default CoachSettings;
