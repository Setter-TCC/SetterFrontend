import React, { createRef, RefObject } from 'react';
import InputMask from 'react-input-mask';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';


const CoachSettings: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = createRef();

  return (
    <Container>
      <SettingsForm>
        <SettingsFormBox>
          <Column>
            <InputWrapper>
              <label>Nome</label>
              <input
                required
                type="text"
                id="name"
                ref={inputRef}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>

              <label>RG</label>
              <InputMask
                mask="99.999.999-9"
                id="rg"
                type="text"
              // value={newAthleteData.rg}
              // defaultValue={selectedAthlete?.rg}
              // onChange={e => setNewAthleteData({ ...newAthleteData, rg: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>CPF</label>
              <InputMask
                mask="999.999.999-99"
                id="cpf"
                type="text"
              // value={newAthleteData.cpf}
              // defaultValue={selectedAthlete?.cpf}
              // onChange={e => setNewAthleteData({ ...newAthleteData, cpf: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>

              <label>CREF</label>
              <input
                type="text"
              // value={coachCref}
              // defaultValue=''
              // onChange={e => updateFields({ coachCref: e.target.value })}
              />
            </InputWrapper>


          </Column>
          <Column>
            <InputWrapper>
              <label>Email</label>
              <input
                type="email"
                ref={inputRef}
                required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Dt de Nascimento</label>
              <input
                type="date"
              // value={athleteData.birth}
              // defaultValue=''
              // onChange={e => setAthleteData({ ...athleteData, birth: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Data de Entrada</label>
              <input
                required
                type="date"
              // value={athleteData.birth}
              // defaultValue=''
              // onChange={e => setAthleteData({ ...athleteData, birth: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Data de Saída</label>
              <input
                type="date"
              // value={athleteData.birth}
              // defaultValue=''
              // onChange={e => setAthleteData({ ...athleteData, birth: e.target.value })}
              />
            </InputWrapper>
          </Column>
        </SettingsFormBox>
        <Buttons>
          <button className="restore" type="button">Restaurar</button>
          <button className="save" type="submit">Salvar Alterações</button>
        </Buttons>
      </SettingsForm>
    </Container>
  );
};

export default CoachSettings;
