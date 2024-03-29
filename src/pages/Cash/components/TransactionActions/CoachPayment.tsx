/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import loadingImg from '../../../../assets/icons/loading.svg';
import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import { CoachData, translateCoachFrontData } from '../../../Settings/utils/interfaces';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, Loading, NotFoundCoach, SelectButton } from './styles';
import { brazilCurrencyMask, removeCurrencySymbols } from '../../../../utils/format';
import { Transaction, TransactionType, translateTransactionToBackData } from '../../utils/interfaces';
import api from '../../../../services/api';


const CoachPayment: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const { setResetActions, setActionModalInfo } = useCash();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [coachPaymentData, setCoachPaymentData] = useState<Transaction>({} as Transaction);
  const [loading, setLoading] = useState(false);
  const [selectedCoachData, setSelectedCoachData] = useState<CoachData | null>(null);
  const { admin } = useAuth();
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    brazilCurrencyMask(event);
    setCoachPaymentData({ ...coachPaymentData, value: Number(removeCurrencySymbols(event.target.value)) });
  };

  const getActiveCoach = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/coach/?team_id=${admin.teamId}`, { headers });
      const formattedCoach = translateCoachFrontData(data.value, admin.teamId);
      setSelectedCoachData(formattedCoach);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response.status === 404) {
        return null;
      }
    }
  };

  useEffect(() => {
    getActiveCoach();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const backData = translateTransactionToBackData({
      ...coachPaymentData,
      teamId: admin.teamId,
      personId: selectedCoachData?.id,
      type: TransactionType.coachPayment,
    });

    try {
      await api.post('/api/transaction/create', backData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({
        text: 'Pagamento do Técnico adicionado com sucesso!',
      });
    } catch (err: any) {
      console.log(err);
      setActionModalInfo({
        text: err?.response?.data?.message || 'Erro ao adicionar Pagamento do Técnico!',
      });
    }
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <>
          {
            loading ?
              <Loading>
                <img src={loadingImg} alt="loading" />
              </Loading>
              :
              <Container>
                <form onSubmit={onSubmit}>
                  <FormDrawerWrapper title='Adicionar Pagamento de Técnico'>
                    {
                      selectedCoachData?.name ? (
                        <>
                          <FormBox>
                            <label>Técnico*</label>
                            <input
                              type="text"
                              value={selectedCoachData?.name}
                              disabled
                              required />
                            <label>Data do Pagamento*</label>
                            <input
                              type='date'
                              required
                              max={today}
                              value={coachPaymentData.date}
                              onChange={(e) => setCoachPaymentData({ ...coachPaymentData, date: e.target.value })}
                            />
                            <label>Valor Pago*</label>
                            <input
                              type="text"
                              required
                              onChange={(e) => handleValueChange(e)}
                            />
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
          }

        </>
      </ContainerBox>
    </ContainerBackground>
  );

};

export default CoachPayment;
