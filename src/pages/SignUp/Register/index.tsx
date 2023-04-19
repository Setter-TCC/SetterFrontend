/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import { Container, Buttons, BackButton, NextButton, SkipButton, Skip } from './styles';
import { useMultiStepForm } from '../../../hooks/useMultiStepForm';
import { AdminForm } from './Forms/AdminForm';
import { TeamForm } from './Forms/TeamForm';
import { CoachForm } from './Forms/CoachForm';
import { FormInputData } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';


const Register: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({} as FormInputData);
  const [skipCoach, setSkipCoach] = useState(false);
  const { currentStepIndex, step, back, next, isLast } = useMultiStepForm([
    <AdminForm {...data} updateFields={updateFields} />,
    <TeamForm {...data} updateFields={updateFields} />,
    <CoachForm {...data} updateFields={updateFields} skipped={skipCoach} />
  ]);

  function updateFields(fields: Partial<FormInputData>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLast) return next();
    navigate('/success');

  }
  return (
    <Container>
      <form onSubmit={onSubmit}>
        {step}
        <Buttons>
          {currentStepIndex !== 0 &&
            <BackButton type="button" onClick={back}>Anterior</BackButton>
          }
          <Skip>
            <NextButton type="submit">{
              !isLast ? 'Próxima Etapa' : 'Finalizar'
            }</NextButton>
            {isLast && <SkipButton type='submit' onClick={() => setSkipCoach(true)}>Pular Etapa</SkipButton>}
          </Skip>

        </Buttons>
      </form>
    </Container>
  );
};

export default Register;
