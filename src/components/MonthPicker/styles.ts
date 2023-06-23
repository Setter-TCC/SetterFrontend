import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const StyledDatePicker = styled(DatePicker)`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  text-align: center;
  width: 8em; 

  
  background: var(--color-primary-white);
  /* border: 1px solid var(--color-primary-blue); */
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-blue);
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
  `;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SelectMonthContainer = styled.div`
  width: 22em;
  height: 3em;
  margin: 0em 2em;
  /* padding: 0em 1em; */
  border: 1px solid var(--color-primary-blue);
  border-radius: 10px;
  gap: 1em;
  

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: var(--color-primary-black);
  }
`;
