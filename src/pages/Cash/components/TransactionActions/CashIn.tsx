/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, SelectButton } from './styles';
import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { Transaction, TransactionType, translateTransactionToBackData } from '../../utils/interfaces';
import { brazilCurrencyMask, removeCurrencySymbols } from '../../../../utils/format';
import api from '../../../../services/api';


const CashIn: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const { admin } = useAuth();
  const { setActionModalInfo, setResetActions } = useCash();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [cashInData, setCashInData] = useState<Transaction>({} as Transaction);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    brazilCurrencyMask(event);
    setCashInData({ ...cashInData, value: Number(removeCurrencySymbols(event.target.value)) });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const backData = translateTransactionToBackData({
      ...cashInData,
      teamId: admin.teamId,
      type: TransactionType.cashIn,
    });

    try {
      await api.post('/api/transaction/create', backData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({
        text: 'Entrada de Caixa adicionada com sucesso!',
      });
    } catch (err: any) {
      console.log(err);
      setActionModalInfo({
        text: err?.response?.data?.message || 'Erro ao adicionar Entrada de Caixa!',
      });
    }
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <Container>
          <form onSubmit={onSubmit}>
            <FormDrawerWrapper title='Adicionar Entrada de Caixa'>
              <FormBox>
                <label>Entrada de Caixa*</label>
                <input
                  type="text"
                  required
                  value={cashInData?.name}
                  onChange={(e) => setCashInData({ ...cashInData, name: e.target.value })} />
                <label>Data do Recebimento*</label>
                <input
                  type='date'
                  required
                  max={today}
                  value={cashInData?.date}
                  onChange={(e) => setCashInData({ ...cashInData, date: e.target.value })} />
                <label>Valor Recebido*</label>
                <input
                  type="text"
                  required
                  onChange={(e) => handleValueChange(e)} />
                <label>Descrição</label>
                <input
                  className='description'
                  type="text"
                  value={cashInData?.description}
                  onChange={(e) => setCashInData({ ...cashInData, description: e.target.value })} />
              </FormBox>
              <ConfirmBox>
                <input className='checkbox' type="checkbox" onChange={handleCheckboxChange} />
                <p>Cofirmo que as informações estão corretas</p>
              </ConfirmBox>
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

export default CashIn;
