import React, { useEffect, useState } from 'react';

import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import { CoachData, translateCoachFrontData } from '../../../Settings/utils/interfaces';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, NotFoundCoach, SelectButton } from './styles';
import api from '../../../../services/api';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};


const CoachPayment: React.FC = () => {
  const { setResetActions } = useCash();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [selectedCoachData, setSelectedCoachData] = useState<CoachData | null>(null);
  const { admin } = useAuth();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const getActiveCoach = async () => {
    try {
      const { data } = await api.get(`/api/coach/?team_id=${admin.teamId}`, { headers });
      const formattedCoach = translateCoachFrontData(data.value, admin.teamId);
      setSelectedCoachData(formattedCoach);
    } catch (error: any) {
      if (error.response.status === 404) {
        return null;
      }
    }
  };

  useEffect(() => {
    getActiveCoach();
  }, []);

  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <Container>
          <form onSubmit={onSubmit}>
            <FormDrawerWrapper title='Adicionar Pagamento de Técnico'>
              {
                selectedCoachData?.name ? (
                  <>
                    <FormBox>
                      <label>Técnico*</label>
                      <input type="text" value={selectedCoachData?.name} disabled required />
                      <label>Data do Pagamento*</label>
                      <input type='date' required />
                      <label>Valor Pago*</label>
                      <input type="text" required />
                    </FormBox>
                    <ConfirmBox>
                      <input className='checkbox' type="checkbox" onChange={handleCheckboxChange} />
                      <p>Cofirmo que as informações estão corretas</p>
                    </ConfirmBox>
                  </>
                ) :
                  <NotFoundCoach>
                    <p>Não há técnico ativo no time!</p>
                  </NotFoundCoach>
              }

              <Buttons>
                <BackButton onClick={setResetActions}>Voltar</BackButton>
                <SelectButton type="submit" disabled={!isCheckboxChecked}>Adicionar</SelectButton>
              </Buttons>
            </FormDrawerWrapper>
          </form>
        </Container>
      </ContainerBox>
    </ContainerBackground>
  );

};

export default CoachPayment;
