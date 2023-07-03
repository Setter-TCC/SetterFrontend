/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, SelectButton } from './styles';
import { useCash } from '../../../../hooks/Cash';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { Transaction, TransactionType, translateTransactionToBackData } from '../../utils/interfaces';
import { useAuth } from '../../../../auth/AuthContext';
import api from '../../../../services/api';
import { brazilCurrencyMask, removeCurrencySymbols } from '../../../../utils/format';


const MonthlyPayment: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const { admin } = useAuth();
  const { selectedAthlete, setSelectAthlete, setActionModalInfo } = useCash();
  const [monthlyPaymentData, setMonthlyPaymentData] = useState<Transaction>({} as Transaction);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    brazilCurrencyMask(event);
    setMonthlyPaymentData({ ...monthlyPaymentData, value: Number(removeCurrencySymbols(event.target.value)) });
  };


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const backData = translateTransactionToBackData({
      ...monthlyPaymentData,
      teamId: admin.teamId,
      personId: selectedAthlete.id,
      type: TransactionType.monthlyPayment,
    });

    try {
      await api.post('/api/transaction/create', backData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({
        text: 'Mensalidade adicionada com sucesso!',
      });
    } catch (err: any) {
      console.log(err);
      setActionModalInfo({
        text: err?.response?.data?.message || 'Erro ao adicionar Mensalidade!',
      });
    }
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <Container>
          <form onSubmit={onSubmit}>
            <FormDrawerWrapper title='Adicionar Mensalidade'>
              <FormBox>
                <label>Atleta*</label>
                <input type="text" value={selectedAthlete.name} disabled />
                <label>Data do Pagamento*</label>
                <input
                  max={today}
                  type='date'
                  required
                  value={monthlyPaymentData?.date}
                  onChange={(e) => setMonthlyPaymentData({ ...monthlyPaymentData, date: e.target.value })}
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
              <Buttons>
                <BackButton onClick={setSelectAthlete}>Voltar</BackButton>
                <SelectButton type="submit" disabled={!isCheckboxChecked}>Adicionar</SelectButton>
              </Buttons>
            </FormDrawerWrapper>
          </form>
        </Container>
      </ContainerBox>
    </ContainerBackground>
  );

};

export default MonthlyPayment;
