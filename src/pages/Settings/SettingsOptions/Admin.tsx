import React, { useState } from 'react';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';
import { AdminBackData, AdminData, translateEditAdminData } from '../utils/interfaces';
import { translatedAdminTemplate, adminDataTemplate } from '../utils/const';
import { useSettings } from '../../../hooks/Settings';

const AdminSettings: React.FC = () => {
  const { setActionModalInfo, setResetToEditAdmin } = useSettings();
  const [adminData, setAdminData] = useState<AdminData>({} as AdminData);

  const verifyPassword = (adminBackData: AdminBackData) => {
    if (adminBackData.senha_antiga === adminBackData.senha_nova) {
      throw new Error('A nova senha deve ser diferente da antiga');
    }
    return;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      // TODO: verificar onde vai ficar a lógica de verificar se a senha antiga é valida para poder alterar a senha
      const adminDataBack = translateEditAdminData(adminDataTemplate, adminData);
      verifyPassword(adminDataBack);
      console.log(adminDataBack);
      setActionModalInfo({
        text: 'Perfil alterado com sucesso!',
        setResetActions: setResetToEditAdmin
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SettingsForm onSubmit={onSubmit}>
        <SettingsFormBox>
          <Column>
            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                defaultValue={translatedAdminTemplate.name || ''}
                value={adminData.name}
                onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                disabled={true}
                defaultValue={translatedAdminTemplate.email || ''}
                value={adminData.email}
                onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
              />
            </InputWrapper>
          </Column>
          <Column>
            <InputWrapper>
              <label htmlFor="oldPassword">Senha antiga</label>
              <input
                type="password"
                id="oldPassword"
                defaultValue={translatedAdminTemplate.oldPassword || ''}
                value={adminData.oldPassword}
                onChange={(e) => setAdminData({ ...adminData, oldPassword: e.target.value })}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="newPassword">Senha nova</label>
              <input
                type="password"
                id="newPassword"
                defaultValue={translatedAdminTemplate.newPassword || ''}
                value={adminData.newPassword}
                onChange={(e) => setAdminData({ ...adminData, newPassword: e.target.value })}
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

export default AdminSettings;
