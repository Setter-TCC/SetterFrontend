import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, SelectButton } from './styles';
import { useCash } from '../../../../hooks/Cash';
import { useAuth } from '../../../../auth/AuthContext';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { Transaction, TransactionType, translateTransactionToBackData } from '../../utils/interfaces';
import api from '../../../../services/api';
import { mascaraMoeda, removeCurrencySymbols, removeSymbols } from '../../../../utils/format';

const CashIn: React.FC = () => {
  const { admin } = useAuth();
  const { setActionModalInfo, setResetActions } = useCash();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [cashInData, setCashInData] = useState<Transaction>({} as Transaction);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    mascaraMoeda(event);
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
    } catch (err: AxiosError | any) {
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
