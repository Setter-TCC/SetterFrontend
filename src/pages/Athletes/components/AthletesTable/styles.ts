import styled from 'styled-components';

export const Container = styled.div`
  background: #FAFAFA;
  min-height: 85vh;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0em 2em 2em;
  background-color: var(--color-primary-white);
`;

export const TableWrapper = styled.div`
  height: 100%; 
  background: #FAFAFA;
`;

export const AthleteTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-top: 1px solid #C6C6C6;

`;

export const TableHead = styled.thead`
  tr:first-child {
    border-top: 1px solid #C6C6C6
  }

  tr:last-child {
    border-bottom: 1px solid #C6C6C6
  }
`;
export const TableBody = styled.tbody`
  /* Estilos para o corpo da tabela, se necessário */
`;

export const TableHeaderCell = styled.th`
  max-width: 80px;
  text-align: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const TableCell = styled.td`
  text-align: left;
  padding-right: 0.7em;
  padding-left: 0.1em;
  padding-top: 1.2em;
  padding-bottom: 1.2em;
  /* padding-top: 16px; */
  margin: 1em;
  max-width: 8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #4D4D4D;

  &:hover {
    white-space: normal;
    overflow: visible;
  }
`;

export const RoundedImage = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  object-fit: cover;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  width: 30em;
  height: 3em;
  background: #F2F3F7;
  border-radius: 8px;
  border: none;

  input {
    width: 100%;
    border: none;
    background: none;
  }

  img {
    width: 1.5em;
    height: 1.5em;
  }
  
`;