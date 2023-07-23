import React from 'react';
import { BackButton, Buttons, Column, Container, ContainerBackground, ContainerBox, FormBox, InputWrapper, SelectButton, EventFormBox } from './styles';
import ListaAtletas from '../PresenceList';
import { useEvent } from '../../../hooks/Event';


const AddOther: React.FC = () => {
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
            <h2>{selectedEvent ? 'Evento' : 'Adicionar Evento'}</h2>
            <EventFormBox>
              <Column>
                <InputWrapper>
                  <label htmlFor="name">Nome do Evento</label>
                  <input
                    defaultValue={selectedEvent?.name}
                    type="text"
                  />
                </InputWrapper>
              </Column>
              <Column>
                <InputWrapper>
                  <label htmlFor="date">Data*</label>
                  <input
                    type="date"
                    max={today}
                    defaultValue={selectedEvent?.date}
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

export default AddOther;
