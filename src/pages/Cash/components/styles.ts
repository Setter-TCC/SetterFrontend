import styled from 'styled-components';

export const MonthCashHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2.5em;
`;

export const BalanceMonthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  align-items: center;
  
  `;

export const BalanceMonth = styled.div`
  flex-direction: column;
  gap: 0.5em;

  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    color: var(--color-primary-black);
  }
  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: grey;
  }
  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-primary-black);
  }
  h4 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: grey;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;

  button {
    width: 10em;
    height: 3em;
    background: var(--color-primary-blue);
    border: none;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: var(--color-primary-white);

    &:hover {
      font-weight: 600;
    }
  }
`;


export const MonthCashBodyContainer = styled.div`
  margin-top: 2em;
  `;

export const ExtractTitle = styled.div`
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 1em;
  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;  
    color: var(--color-primary-grey);
}
`;