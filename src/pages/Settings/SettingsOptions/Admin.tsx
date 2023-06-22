/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Container, Column, InputWrapper, SettingsForm, Buttons, SettingsFormBox } from './styles';
import { AdminData, transformAdminData, translateAdminFrontData, translateAdminBackData } from '../utils/interfaces';
import { useSettings } from '../../../hooks/Settings';
import api from '../../../services/api';

const AdminSettings: React.FC = () => {
  const { setActionModalInfo, setResetToEditAdmin } = useSettings();
  const [newAdminData, setNewAdminData] = useState<AdminData>({} as AdminData);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminData>({} as AdminData);

  const getAdmin = async () => {
    try {
      const { data } = await api.get('/api/admin', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const adminData = translateAdminFrontData(data.value);
      setSelectedAdmin(adminData);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyPassword = (adminBackData: AdminData) => {
    try {
      if (adminBackData.oldPassword && adminBackData.newPassword
        && adminBackData.oldPassword === adminBackData.newPassword) {
        throw new Error('A nova senha deve ser diferente da antiga');
      }
      return true;
    } catch (err: any) {
      setActionModalInfo({ text: err.message, setResetActions: setResetToEditAdmin });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      const adminData = transformAdminData(selectedAdmin, newAdminData);

      if (!verifyPassword(adminData)) {
        return;
      }
      const adminDataBack = translateAdminBackData(adminData);
      await api.put('/api/admin/update', adminDataBack, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      setActionModalInfo({
        text: 'Perfil alterado com sucesso!',
        setResetActions: setResetToEditAdmin
      });
    } catch (err: any) {
      setActionModalInfo({ text: 'Erro ao alterar perfil!', setResetActions: setResetToEditAdmin });
    }

  };

  useEffect(() => {
    getAdmin();
  }, []);

  const renderAdminForm = () => {
    return (
      <Container>
        <SettingsForm onSubmit={onSubmit}>
          <SettingsFormBox>
            <Column>
              <InputWrapper>
                <label htmlFor="name">Nome*</label>
                <input
                  type="text"
                  defaultValue={selectedAdmin.name}
                  value={newAdminData.name}
                  onChange={(e) => setNewAdminData({ ...newAdminData, name: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="name">Nome de Usuário*</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={selectedAdmin.username || ''}
                  value={newAdminData.username}
                  onChange={(e) => setNewAdminData({ ...newAdminData, name: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="oldPassword">Senha antiga</label>
                <input
                  type="password"
                  defaultValue={selectedAdmin.oldPassword || ''}
                  value={newAdminData.oldPassword}
                  onChange={(e) => setNewAdminData({ ...newAdminData, oldPassword: e.target.value })}
                />
              </InputWrapper>
            </Column>
            <Column>
              <InputWrapper>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  disabled={true}
                  defaultValue={selectedAdmin.email || ''}
                  value={newAdminData.email}
                  onChange={(e) => setNewAdminData({ ...newAdminData, email: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Telefone*</label>
                <InputMask
                  mask="(99) 99999-9999"
                  type="text"
                  defaultValue={selectedAdmin.phone}
                  value={newAdminData.phone}
                  onChange={(e) => setNewAdminData({ ...newAdminData, phone: e.target.value })}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="newPassword">Senha nova</label>
                <input
                  type="password"
                  defaultValue={selectedAdmin.newPassword || ''}
                  value={newAdminData.newPassword}
                  onChange={(e) => setNewAdminData({ ...newAdminData, newPassword: e.target.value })}
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
      {
        selectedAdmin.name && renderAdminForm()
      }
    </>
  );
};

export default AdminSettings;
