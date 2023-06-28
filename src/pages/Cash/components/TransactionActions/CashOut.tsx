/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, SelectButton } from './styles';
import { useCash } from '../../../../hooks/Cash';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';
import { Transaction, TransactionType, translateTransactionToBackData } from '../../utils/interfaces';
import { useAuth } from '../../../../auth/AuthContext';
import { brazilCurrencyMask, removeCurrencySymbols } from '../../../../utils/format';
import api from '../../../../services/api';

const CashIn: React.FC = () => {
  const { admin } = useAuth();
  const { setResetActions, setActionModalInfo } = useCash();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [cashOutData, setCashOutData] = useState<Transaction>({} as Transaction);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    brazilCurrencyMask(event);
    setCashOutData({ ...cashOutData, value: Number(removeCurrencySymbols(event.target.value)) });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const backData = translateTransactionToBackData({
      ...cashOutData,
      teamId: admin.teamId,
      type: TransactionType.cashOut,
    });

    try {
      await api.post('/api/transaction/create', backData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActionModalInfo({
        text: 'Saída de Caixa adicionada com sucesso!',
      });
      setResetActions();
    } catch (err: any) {
      console.log(err);
      setActionModalInfo({
        text: err?.response?.data?.message || 'Erro ao adicionar Saída de Caixa!',
      });
    }
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <Container>
          <form onSubmit={onSubmit}>
            <FormDrawerWrapper title='Adicionar Saída de Caixa'>
              <FormBox>
                <label>Saída de Caixa*</label>
                <input
                  type="text"
                  required
                  value={cashOutData?.name}
                  onChange={(e) => setCashOutData({ ...cashOutData, name: e.target.value })} />
                <label>Data do Pagamento*</label>
                <input
                  type='date'
                  required
                  value={cashOutData?.date}
                  onChange={(e) => setCashOutData({ ...cashOutData, date: e.target.value })} />
                <label>Valor Pago*</label>
                <input
                  type="text"
                  required
                  onChange={(e) => handleValueChange(e)} />
                <label>Descrição</label>
                <input
                  className='description'
                  type="text"
                  value={cashOutData?.description}
                  onChange={(e) => setCashOutData({ ...cashOutData, description: e.target.value })} />
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
