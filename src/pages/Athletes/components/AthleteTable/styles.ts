import styled, { css } from 'styled-components';

interface RowProps {
  isActive: boolean;
}

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
  max-height: 75vh;
  overflow: auto;
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

export const TableHeaderCell = styled.th`
  max-width: 80px;
  text-align: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr<RowProps>`
  position: relative;
  z-index: 1;
  color: ${props => (props.isActive ? '#4D4D4D' : 'rgba(77, 77, 77, 0.5)')};
 
 td {
  &.first-cell {
    padding-left: 2em;
    padding-right: 0em;
  }

  text-align: left;
  padding-right: 0.5em;
  padding-top: 1.2em;
  padding-bottom: 1.2em;
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

  &:hover {
    white-space: normal;
    overflow: visible;
  }
 }
`;

export const RoundedImage = styled.img<RowProps>`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  object-fit: cover;

  ${props =>
    !props.isActive &&
    css`
      /* filter: grayscale(100%); */
      opacity: 0.5;
    `}
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
    border: none;
    background: none;
  }

  img {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const MoreActionsButton = styled.button`
  border: none;
  background: none;

  img {
    width: 1em;
    height: 2em; 
  }
`;

export const AthleteButtons = styled.div`
  position: absolute;
  right: 1em;
  top: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  width: 160px;
  height: 80px;
  background: none;
  border: none;

  button {
    width: 100%;
    height: 50%;

    &:hover {
      font-weight: bold;
    }
  }

  .edit {
    background-color: var(--color-primary-blue);
    border-radius: 10px 10px 0px 0px;
    border: var(--color-primary-blue);
    color: var(--color-primary-white);
  }

  .deactivate {
    background-color: #F89C50;
    border-radius: 0px 0px 10px 10px;
    border: #F89C50;
    color: var(--color-primary-white);
  }

  .activate {
    margin-top: 15%;
    background-color: var(--color-primary-green);
    border-radius: 10px;
    border: #F89C50;
    color: var(--color-primary-white);
  }
`;

export const EmptyTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4D4D4D;
`;
