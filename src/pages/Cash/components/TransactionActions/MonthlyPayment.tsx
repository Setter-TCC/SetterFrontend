import React, { useState } from 'react';

import { BackButton, Buttons, ConfirmBox, Container, ContainerBackground, ContainerBox, FormBox, SelectButton } from './styles';
import { useCash } from '../../../../hooks/Cash';
import { FormDrawerWrapper } from '../../../../components/FormWrapper';

const MonthlyPayment: React.FC = () => {
  const { selectedAthlete, setSelectAthlete } = useCash();
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
            <FormDrawerWrapper title='Adicionar Mensalidade'>
              <FormBox>
                <label>Atleta*</label>
                <input type="text" value={selectedAthlete.name} disabled />
                <label>Data do Pagamento*</label>
                <input type='date' />
                <label>Valor Pago*</label>
                <input type="text" />
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
