import React, { useState } from 'react';
import { BackButton, Buttons, Column, Container, ContainerBackground, ContainerBox, FormBox, InputWrapper, SelectButton, EventFormBox } from './styles';
import AthletesList from '../PresenceList';
import { useEvent } from '../../../hooks/Event';
import api from '../../../services/api';
import { useAuth } from '../../../auth/AuthContext';
import { EventData, EventType, translateEventToBackData } from '../utils/interfaces';

const AddGame: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const { admin } = useAuth();
  const [newGame, setNewGame] = useState({} as EventData);
  const { setActionModalInfo, setResetActions, selectedEvent, athletesPresenceList } = useEvent();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const addGameData: EventData = ({ ...newGame, type: EventType.game, listAthletes: athletesPresenceList || [], teamId: admin.teamId });
    const addGameBackData = translateEventToBackData(addGameData);
    try {
      await api.post('/api/event/create', addGameBackData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({ text: 'Jogo criado com sucesso!', setResetActions });
    } catch (err) {
      console.log(err);
      setActionModalInfo({ text: 'Erro ao criar jogo!', setResetActions });
    }
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <form onSubmit={onSubmit}>
          <Container>
            <h2>{selectedEvent ? 'Jogo' : 'Adicionar Jogo'}</h2>
            <EventFormBox>
              <Column>
                <InputWrapper>
                  <label htmlFor="date">Data*</label>
                  {
                    selectedEvent ? (
                      <input
                        defaultValue={selectedEvent.date}
                        readOnly
                        type="text" />
                    ) : (
                      <input
                        required
                        type="date"
                        max={today}
                        // value={}
                        onChange={(e) => setNewGame({ ...newGame, date: e.target.value })}
                      />
                    )
                  }
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="oponnent">Adversário</label>
                  <input
                    readOnly={selectedEvent !== undefined}
                    defaultValue={selectedEvent?.opponent}
                    type="text"
                    onChange={(e) => setNewGame({ ...newGame, opponent: e.target.value })}
                  />
                </InputWrapper>
              </Column>
              <Column>
                <InputWrapper>
                  <label htmlFor="local">Local</label>
                  <input
                    readOnly={selectedEvent !== undefined}
                    defaultValue={selectedEvent?.local}
                    type="text"
                    onChange={(e) => setNewGame({ ...newGame, local: e.target.value })}
                  />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="championship">Campeonato</label>
                  <input
                    readOnly={selectedEvent !== undefined}
                    defaultValue={selectedEvent?.championship}
                    type="text"
                    onChange={(e) => setNewGame({ ...newGame, championship: e.target.value })}
                  />
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
                  onChange={(e) => setNewGame({ ...newGame, observation: e.target.value })}
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

export default AddGame;
