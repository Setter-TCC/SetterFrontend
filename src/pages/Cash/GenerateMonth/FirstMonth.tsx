import React, { useState } from 'react';
import generateCash from '../../../assets/images/generateCash.svg';
import { GenerateCashContainer, GenerateCashButton, NotFoundText } from './styles';
import GenerateCashMonth from '.';


const FirstMonth: React.FC = () => {
  const [generateMonth, setGenerateMonth] = useState(false);

  return (
    <>
      {generateMonth && <GenerateCashMonth />}
      <GenerateCashContainer>
        <img src={generateCash} />
        <NotFoundText>Crie seu primeiro Fluxo de Caixa</NotFoundText>
        <GenerateCashButton type="button" onClick={() => setGenerateMonth(true)}>Gerar mês</GenerateCashButton>
      </GenerateCashContainer>
    </>
  );
};

export default FirstMonth;
