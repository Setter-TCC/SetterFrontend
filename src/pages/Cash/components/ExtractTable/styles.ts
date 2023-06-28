import styled, { css } from 'styled-components';

interface RowProps {
  isNegative: boolean;
}

export const EmptyExtract = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;

  img {
    width: 15em;
    height: 15em;
  }

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: var(--color-primary-grey);
  }
`;

export const ExtractTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ExtractTableHeader = styled.thead`
  padding: 1em 0;
  tr{
    th {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--color-primary-black);
      text-align: left;
    }
  }
`;

export const ExtractTableBody = styled.tbody``;

export const ExtractTableBodyTd = styled.td`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  color: var(--color-primary-grey);
  text-align: left;
  padding: 1em 0;
`;

export const RowValue = styled.td<RowProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  color: var(--color-primary-green);
  text-align: left;
  padding: 1em 0;
  
  ${({ isNegative }: RowProps) => isNegative && css`
    color: var(--color-primary-red);
  `}
`;

export const RowTypeTransaction = styled.td<RowProps>`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  color: var(--color-primary-grey);
  text-align: center;
  align-items: center;
  
  
  div {
    padding: 0em 0.5em;
    margin: 1em 0em;
    display: flex;
    justify-content: center;
    max-width: 80%;
    min-width: 60%;
    height: 100%;
    border: 1px solid var(--color-primary-green);
    border-radius: 5px;
    
    ${({ isNegative }: RowProps) => isNegative && css`
    border: 1px solid var(--color-primary-red);
    `}
  }
`;
