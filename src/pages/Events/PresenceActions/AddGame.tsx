import React from 'react';
import { BackButton, Buttons, Column, Container, ContainerBackground, ContainerBox, FormBox, InputWrapper, SelectButton, EventFormBox } from './styles';
import ListaAtletas from '../PresenceList';
import { useEvent } from '../../../hooks/Event';

const AddGame: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const { setResetActions, presenceAthletes, selectedEvent } = useEvent();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
                  <input
                    defaultValue={selectedEvent?.date}
                    type="date"
                    max={today}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="oponnent">Adversário</label>
                  <input
                    defaultValue={selectedEvent?.opponent}
                    type="text"
                  />
                </InputWrapper>
              </Column>
              <Column>
                <InputWrapper>
                  <label htmlFor="local">Local</label>
                  <input
                    defaultValue={selectedEvent?.local}
                    type="text"
                  />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="championship">Campeonato</label>
                  <input
                    defaultValue={selectedEvent?.championship}
                    type="text"
                  />
                </InputWrapper>
              </Column>
            </EventFormBox>

            <ListaAtletas athletes={presenceAthletes} />

            <FormBox>
              <InputWrapper>
                <label htmlFor="value">Observações</label>
                <input
                  defaultValue={selectedEvent?.observation}
                  className='observation'
                  type="text"
                />
              </InputWrapper>
            </FormBox>
            <Buttons>
              <BackButton onClick={setResetActions}>Voltar</BackButton>
              <SelectButton type="submit">Adicionar</SelectButton>
            </Buttons>
          </Container>
        </form>
      </ContainerBox>
    </ContainerBackground>
  );

};

export default AddGame;
