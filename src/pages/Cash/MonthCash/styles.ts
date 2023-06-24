import styled from 'styled-components';

export const MonthCashContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #E5E5E5;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
  
  width: 100%;
  min-height: 75vh;
  margin-top: 1.5em;
`;

export const MonthCashContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
`;

export const CashHeader = styled.div`
  padding: 2em 2em 1em;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;

  color: #4E3C3C;
`;
