import React, { useState } from 'react';
import { BackButton, Buttons, Column, Container, ContainerBackground, ContainerBox, FormBox, InputWrapper, SelectButton, EventFormBox } from './styles';
import AthletesList from '../PresenceList';
import { useEvent } from '../../../hooks/Event';
import { useAuth } from '../../../auth/AuthContext';
import { EventData, EventType, translateEventToBackData } from '../utils/interfaces';
import api from '../../../services/api';


const AddOther: React.FC = () => {
  const { admin } = useAuth();
  const today = new Date().toISOString().split('T')[0];
  const [newOther, setNewOther] = useState({} as EventData);
  const { setActionModalInfo, setResetActions, selectedEvent, athletesPresenceList } = useEvent();


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const addGameData: EventData = ({ ...newOther, type: EventType.other, listAthletes: athletesPresenceList || [], teamId: admin.teamId });
    const addGameBackData = translateEventToBackData(addGameData);
    try {
      await api.post('/api/event/create', addGameBackData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({ text: 'Evento criado com sucesso!', setResetActions });
    } catch (err) {
      setActionModalInfo({ text: 'Erro ao criar evento!', setResetActions });
    }
  };
  console.log(selectedEvent?.date);
  return (
    <ContainerBackground>
      <ContainerBox>
        <form onSubmit={onSubmit}>
          <Container>
            <h2>{selectedEvent ? 'Evento' : 'Adicionar Evento'}</h2>
            <EventFormBox>
              <Column>
                <InputWrapper>
                  <label htmlFor="name">Nome do Evento</label>
                  <input
                    readOnly={selectedEvent !== undefined}
                    required
                    defaultValue={selectedEvent?.name}
                    type="text"
                    onChange={(e) => setNewOther({ ...newOther, name: e.target.value })}
                  />
                </InputWrapper>
              </Column>
              <Column>
                <InputWrapper>
                  <label htmlFor="date">Data*</label>
                  {selectedEvent ? (
                    <input
                      defaultValue={selectedEvent.date}
                      readOnly
                      type="text" />
                  ) : (
                    <input
                      required
                      type="date"
                      max={today}
                      onChange={(e) => setNewOther({ ...newOther, date: e.target.value })}
                    />
                  )}
                </InputWrapper>
              </Column>
            </EventFormBox>

            <AthletesList />

            <FormBox>
              <InputWrapper>
                <label htmlFor="value">Observações</label>
                <input
                  readOnly={selectedEvent !== undefined}
                  defaultValue={selectedEvent?.observation}
                  className='observation'
                  type="text"
                  onChange={(e) => setNewOther({ ...newOther, observation: e.target.value })}
                />
              </InputWrapper>
            </FormBox>
            <Buttons>
              <BackButton onClick={setResetActions}>Voltar</BackButton>
              {
                !selectedEvent &&
                <SelectButton type="submit">Adicionar</SelectButton>
              }
            </Buttons>
          </Container>
        </form>
      </ContainerBox>
    </ContainerBackground>
  );

};

export default AddOther;
