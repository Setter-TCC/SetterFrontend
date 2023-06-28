import styled, { css } from 'styled-components';
interface AthleteProps {
  isSelected: boolean;
}

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
  width: 28em;
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
  flex-direction: column;
  height: 34em;
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
  justify-content: space-between;
  margin-top: 1em;
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
