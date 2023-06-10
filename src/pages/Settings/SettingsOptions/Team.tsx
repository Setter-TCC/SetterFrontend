import React, { createRef, RefObject } from 'react';
import InputMask from 'react-input-mask';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';
import { suits } from '../../SignUp/utils/const';


const TeamSettings: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = createRef();
  return (
    <Container>
      <SettingsForm>
        <SettingsFormBox>
          <Column>
            <InputWrapper>
              <label htmlFor="name">Nome do Time</label>
              <input
                type="text"
                id="name"
                ref={inputRef}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="name">Email do Time</label>
              <input
                type="email"
                id="email"
                ref={inputRef}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>

          </Column>
          <Column>
            <InputWrapper>
              <label htmlFor="name">CNPJ do Time</label>
              <InputMask
                mask="99.999.999/9999-99"
                id="cnpj"
                type="text"
              // ref={inputRefMask}
              // value={teamCnpj}
              // onChange={e => updateFields({ teamCnpj: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="name">Naipe do Time</label>
              <select
              // value={""}
              // onChange={(e) => updateFields({ teamSuit: Number(e.target.value) })}
              >
                {suits.map(suit => (
                  <option key={suit.type} value={suit.type}>{suit.name}</option>
                ))}
              </select>
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

export default TeamSettings;
