import { FormWrapper } from './FormWrapper';

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

export const CoachForm = ({ coachName, coachEmail, coachPhone, coachCref, updateFields, skipped }: CoachFormProps) => {
  return <>
    {!skipped && <FormWrapper step="Etapa 3" title='Adicione um técnico para o time'>
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
      <input
        required
        type="number"
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
