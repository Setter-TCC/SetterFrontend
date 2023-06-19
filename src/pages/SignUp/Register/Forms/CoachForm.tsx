import InputMask from 'react-input-mask';
import { FormWrapper } from '../../../../components/SignUpFormWrapper/index';

type CoachData = {
  coachName: string,
  coachEmail: string,
  coachPhone: string,
  coachCref: string,
}

type CoachFormProps = CoachData & {
  updateFields: (fields: Partial<CoachData>) => void,
  skipped?: boolean,
}

// TODO: quando o usuário pular essa etapa, devo criar uma tela de loading até ele ser logado, ou der algum problema na criação da conta
export const CoachForm = ({ coachName, coachEmail, coachPhone, coachCref, updateFields, skipped }: CoachFormProps) => {
  return <>
    {!skipped && <FormWrapper step="Etapa 3" title='Adicione um técnico para o time' inputBackgroundColor='var(--color-primary-white)'>
      <label>Nome</label>
      <input
        autoFocus
        required
        type="text"
        value={coachName}
        onChange={e => updateFields({ coachName: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        type="email"
        value={coachEmail}
        onChange={e => updateFields({ coachEmail: e.target.value })}
      />
      <label>Telefone</label>
      <InputMask
        mask="(99) 99999-9999"
        id="phone"
        type="text"
        value={coachPhone}
        onChange={e => updateFields({ coachPhone: e.target.value })}
      />
      <label>CREF (opcional)</label>
      <input
        type="text"
        value={coachCref}
        onChange={e => updateFields({ coachCref: e.target.value })}
      />
    </FormWrapper>}
  </>;
};
