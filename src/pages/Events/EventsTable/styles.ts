import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tbody{
    tr {
    height: 2.5em;

    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
    }
  }

  th{
    padding: 10px;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

  }
  td {
    padding: 10px;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }

  th {
    border-bottom: 1px solid #ddd;
  }

  .presences {
    font-weight: bold;
    color: var(--color-primary-green);
  }

  .faults {
    font-weight: bold;
    color: var(--color-primary-red);
  }

  .justifiedFaults {
    font-weight: bold;
    color: var(--color-primary-orange);
  }
`;
