import styled, { css } from 'styled-components';
interface AthleteProps {
  isSelected: boolean;
}

export const Loading = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerBackground = styled.div`
 position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const ContainerBox = styled.div`
  width: 45em;
  height: 100%;
  background-color: var(--color-primary-white);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 1em;
  `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4em;
    display: flex;
    align-items: center;
    color: #046E8F;
    margin-bottom: 1em;
    text-align: center;
    margin-bottom: 2em;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  width: 20em;
  height: 2.5em;
  background: #F2F3F7;
  border-radius: 8px;
  border: none;
  margin-bottom: 1em;

  input {
    border: none;
    background: none;
  }

  img {
    width: 1em;
    height: 1em;
  }
`;

export const AthleteList = styled.div`
  display: flex;
  flex-direction: column;
  height: 30em;
  overflow-y: scroll;
`;

export const AthleteRow = styled.div<AthleteProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8em;
  height: 2.5em;
  width: 20em;
  padding-left: 1em;
  border-radius: 8px;

  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-primary-blue)' : 'transparent'};
  color: ${({ isSelected }) =>
    isSelected ? 'var(--color-primary-white)' : 'var(--color-primary-grey)'};
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '400')};
  cursor: pointer;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }

  &:hover {
    background-color: var(--color-primary-blue);
    color: var(--color-primary-white);
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 34em; */
`;

export const ConfirmBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .checkbox {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: var(--color-primary-grey);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 2em;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  background: #046E8F;
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

  ${({ disabled }) => disabled && css`
      cursor: default;
      opacity: 0.5;

      &:hover {
        font-weight: 400;
      }
  `}
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 40px;
  background: var(--color-primary-white);
  border: 1px solid var(--color-primary-blue);
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: var(--color-primary-blue);

  &:hover {
    font-weight: 600;
  }
`;

export const NotFoundCoach = styled.div` 
  width: 20em;
  height: 34em;
  display: flex;
  justify-content: center;
`;




export const EventFormBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.3em;

  label {
    min-width: 5em;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: var(--color-primay-grey);
  }

  .observation {
    min-width: 46em;
    height: 5em;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: var(--color-primay-grey);
  }

  input {
    background: #FFFFFF;
    min-width: 15em;
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 1em;
  }

  select {
    height: 2.5em;
    min-width: 20em;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #5D5D5D;
    background: var(--color-primary-white);
  }
`;