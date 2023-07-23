import styled from 'styled-components';

export const PresenceListContainer = styled.div`
  width: 100%;
  padding-top: 2em;
  padding-bottom: 2em;
  `;

export const PresenceTableWrapper = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 45vh;
  padding: 0.5em;
`;

export const PresenceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    max-width: 8em;
    padding: 10px;
    text-align: initial;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    color: var(--color-primary-blue);
  }
`;

export const AthleteName = styled.span`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  color: var(--color-primary-black);
`;

export const RadioInput = styled.input`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const JustificativaInput = styled.input`
  display: inline-block;
  width: 100%;

  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;
