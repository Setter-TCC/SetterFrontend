import { FormWrapper } from './FormWrapper';
type TeamData = {
  teamName: string,
  teamEmail: string,
  teamCnpj: string,
  teamSuit: string,
}

type TeamFormProps = TeamData & {
  updateFields: (fields: Partial<TeamData>) => void,
}

export const TeamForm = ({ teamName, teamEmail, teamCnpj, teamSuit, updateFields }: TeamFormProps) => {

  return <FormWrapper step="Etapa 2" title='Crie uma conta para seu time'>
    <label>Nome</label>
    <input
      autoFocus
      required
      type="text"
      value={teamName}
      onChange={e => updateFields({ teamName: e.target.value })}
    />
    <label>CNPJ da Equipe (opcional)</label>
    <input
      type="text"
      value={teamCnpj}
      onChange={e => updateFields({ teamCnpj: e.target.value })}
    />
      
    <label>Email</label>
    <input
      required
      type="email"
      value={teamEmail}
      onChange={e => updateFields({ teamEmail: e.target.value })}
    />
    <label>Suit</label>
    <input
      required
      type="text"
      value={teamSuit}
      onChange={e => updateFields({ teamSuit: e.target.value })}
    />
  </FormWrapper>;
};
