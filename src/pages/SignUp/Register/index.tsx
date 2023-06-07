/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import { Container, Buttons, BackButton, NextButton, SkipButton, Skip, Loading } from './styles';
import { useMultiStepForm } from '../../../hooks/useMultiStepForm';
import { AdminForm } from './Forms/AdminForm';
import { TeamForm } from './Forms/TeamForm';
import { CoachForm } from './Forms/CoachForm';
import { BackendData, FormInputData, translateFormData } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import loading from '../../../assets/icons/loading.svg';
import { useAuth } from '../../../auth/AuthContext';


const Register: React.FC = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const [formData, setFormData] = useState<FormInputData>({} as FormInputData);
  const [skipCoach, setSkipCoach] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    try {
      setIsSubmitting(true);
      const { data } = await api.post('/api/account/register', backFormData);
      logIn(data.token);
      navigate('/success');
    } catch (err) {
      alert('Erro ao cadastrar, tente novamente');
      navigate('/');
    }
  }
  return (
    <Container>
      {
        isSubmitting ?
          <Loading>
            <img src={loading} alt="loading" />
          </Loading>
          : (<form onSubmit={onSubmit}>
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
          </form>)
      }
    </Container>
  );
};

export default Register;
