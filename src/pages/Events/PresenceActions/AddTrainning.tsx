import React from 'react';
import { BackButton, Buttons, Column, Container, ContainerBackground, ContainerBox, FormBox, InputWrapper, SelectButton, EventFormBox } from './styles';
import AthletesList from '../PresenceList';
import { useEvent } from '../../../hooks/Event';


const AddTrainning: React.FC = () => {
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
            <h2>{selectedEvent ? 'Treino' : 'Adicionar Treino'}</h2>
            <EventFormBox>
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
              <Column>
                <InputWrapper>
                  <label htmlFor="local">Local</label>
                  <input
                    type="text"
                    defaultValue={selectedEvent?.local}
                  />
                </InputWrapper>
              </Column>
            </EventFormBox>

            <AthletesList athletes={presenceAthletes} />

            <FormBox>
              <InputWrapper>
                <label htmlFor="value">Observações</label>
                <input
                  className='observation'
                  type="text"
                  defaultValue={selectedEvent?.observation}
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

export default AddTrainning;
