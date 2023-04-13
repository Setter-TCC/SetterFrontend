/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import { Container, Buttons, BackButton, NextButton } from './styles';
import { useMultiStepForm } from '../../../hooks/useMultiStepForm';
import { AdminForm } from './Forms/AdminForm';
import { TeamForm } from './Forms/TeamForm';
import { CoachForm } from './Forms/CoachForm';
import { FormInputData } from '../utils/interfaces';

const Register: React.FC = () => {
  const [data, setData] = useState({} as FormInputData);
  const { currentStepIndex, step, back, next, isLast } = useMultiStepForm([
    <AdminForm {...data} updateFields={updateFields} />,
    <TeamForm {...data} updateFields={updateFields} />,
    <CoachForm {...data} updateFields={updateFields} />
  ]);

  function updateFields(fields: Partial<FormInputData>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLast) return next();
    alert('Terminou forms');

  }
  return (
    <Container>
      <form onSubmit={onSubmit}>
        {step}
        <Buttons>
          {currentStepIndex !== 0 && <BackButton type="button" onClick={back}>Anterior</BackButton>}
          <NextButton type="submit">{
            !isLast ? 'Próxima Etapa' : 'Finalizar'
          }</NextButton>
        </Buttons>
      </form>
    </Container>
  );
};

export default Register;
