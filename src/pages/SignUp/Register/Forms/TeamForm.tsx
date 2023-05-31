import InputMask from 'react-input-mask';
import { FormWrapper } from '../../../../components/FormWrapper/index';
import { suits } from '../../utils/const';
type TeamData = {
  teamName: string,
  teamEmail: string,
  teamCnpj: string,
  teamSuit: number,
}

type TeamFormProps = TeamData & {
  updateFields: (fields: Partial<TeamData>) => void,
}

export const TeamForm = ({ teamName, teamEmail, teamCnpj, teamSuit, updateFields }: TeamFormProps) => {
  return <FormWrapper step="Etapa 2" title='Crie uma conta para seu time' inputBackgroundColor='var(--color-primary-white)'>
    <label>Nome</label>
    <input
      autoFocus
      required
      type="text"
      value={teamName}
      onChange={e => updateFields({ teamName: e.target.value })}
    />

    <label>CNPJ do Time (opcional)</label>
    <InputMask
      mask="99.999.999/9999-99"
      id="cnpj"
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

    <label>Naipe</label>
    <select value={teamSuit} onChange={(e) => updateFields({ teamSuit: Number(e.target.value) })}>
      {suits.map(suit => (
        <option key={suit.type} value={suit.type}>{suit.name}</option>
      ))}
    </select>

  </FormWrapper>;
};
