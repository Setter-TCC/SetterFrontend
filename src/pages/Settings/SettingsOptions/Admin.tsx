import React from 'react';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';

const AdminSettings: React.FC = () => {
  return (
    <Container>
      <SettingsForm>
        <SettingsFormBox>
          <Column>
            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="name">Email</label>
              <input
                type="email"
                id="email"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>

          </Column>
          <Column>
            <InputWrapper>
              <label htmlFor="name">Senha antiga</label>
              <input
                type="password"
                id="oldPassword"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="name">Senha nova</label>
              <input
                type="password"
                id="newPassword"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
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

export default AdminSettings;
