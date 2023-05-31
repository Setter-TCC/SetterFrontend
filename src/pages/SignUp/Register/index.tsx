/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import { Container, Buttons, BackButton, NextButton, SkipButton, Skip } from './styles';
import { useMultiStepForm } from '../../../hooks/useMultiStepForm';
import { AdminForm } from './Forms/AdminForm';
import { TeamForm } from './Forms/TeamForm';
import { CoachForm } from './Forms/CoachForm';
import { BackendData, FormInputData, translateFormData } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';


const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormInputData>({} as FormInputData);
  const [skipCoach, setSkipCoach] = useState(false);
  const { currentStepIndex, step, back, next, isLast } = useMultiStepForm([
    <AdminForm {...formData} updateFields={updateFields} />,
    <TeamForm {...formData} updateFields={updateFields} />,
    <CoachForm {...formData} updateFields={updateFields} skipped={skipCoach} />
  ]);

  function updateFields(fields: Partial<FormInputData>) {
    setFormData(prev => {
      return { ...prev, ...fields };
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLast) return next();

    const backFormData: BackendData = translateFormData(formData);

    console.log(backFormData);

    try {
      await api.post('/api/account', backFormData);
      // signin backFormData.email backFormData.password 

      navigate('/success');


    } catch (err) {
      console.log(err);
    }
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
