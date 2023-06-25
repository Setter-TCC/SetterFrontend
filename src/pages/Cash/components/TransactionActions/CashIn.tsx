import React, { useState } from 'react';

import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, SelectButton } from './styles';
import { useCash } from '../../../../hooks/Cash';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';

const CashIn: React.FC = () => {
  const { setResetActions } = useCash();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <ContainerBackground>
      <ContainerBox>
        <Container>
          <form onSubmit={onSubmit}>
            <FormDrawerWrapper title='Adicionar Entrada de Caixa'>
              <FormBox>
                <label>Entrada de Caixa*</label>
                <input type="text" required />
                <label>Data do Pagamento*</label>
                <input type='date' required />
                <label>Valor Recebido*</label>
                <input type="text" required />
                <label>Descrição</label>
                <input className='description' type="text" />
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
