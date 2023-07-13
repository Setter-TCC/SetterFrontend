import InputMask from 'react-input-mask';
import { FormWrapper } from '../../../../components/SignUpFormWrapper/index';

type AdminData = {
  adminName: string,
  adminEmail: string,
  adminPhone: string,
  adminUsername: string,
  adminPassword: string,
}

type AdminFormProps = AdminData & {
  updateFields: (fields: Partial<AdminData>) => void,
}

export const AdminForm = ({ adminName = '', adminEmail = '', adminPhone = '', adminUsername = '', adminPassword = '', updateFields }: AdminFormProps) => {

  return <FormWrapper step="Etapa 1" title="Crie uma conta de administrador" inputBackgroundColor='var(--color-primary-white)'>
    <label>Nome</label>
    <input
      autoFocus
      required
      type="text"
      value={adminName}
      onChange={e => updateFields({ adminName: e.target.value })} />
    <label>Email</label>
    <input
      required
      type="email"
      value={adminEmail}
      onChange={e => updateFields({ adminEmail: e.target.value })}
    />
    <label>Telefone</label>
    <InputMask
      mask="(99) 99999-9999"
      id="phone"
      type="text"
      value={adminPhone}
      onChange={e => updateFields({ adminPhone: e.target.value })}
    />
    <label>Nome do usuário</label>
    <input
      autoFocus
      required
      type="text"
      value={adminUsername}
      onChange={e => updateFields({ adminUsername: e.target.value })} />
    <label>Senha</label>
    <input
      required
      type="password"
      value={adminPassword}
      onChange={e => updateFields({ adminPassword: e.target.value })}
    />
  </FormWrapper>;
};
