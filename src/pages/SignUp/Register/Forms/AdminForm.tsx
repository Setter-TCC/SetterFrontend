import { FormWrapper } from '../../../../components/FormWrapper/index';

type AdminData = {
  adminName: string,
  adminEmail: string,
  adminPhone: string,
  adminPassword: string,
}

type AdminFormProps = AdminData & {
  updateFields: (fields: Partial<AdminData>) => void,
}

export const AdminForm = ({ adminName, adminEmail, adminPhone, adminPassword, updateFields }: AdminFormProps) => {

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
    <input
      required
      type="number"
      value={adminPhone}
      onChange={e => updateFields({ adminPhone: e.target.value })}
    />
    <label>Senha</label>
    <input
      required
      type="password"
      value={adminPassword}
      onChange={e => updateFields({ adminPassword: e.target.value })}
    />
  </FormWrapper>;
};
