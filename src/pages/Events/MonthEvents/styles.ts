import styled, { css } from 'styled-components';

interface SettingsProps {
  isSelected: boolean;
}

interface ButtonProps {
  isClicked: boolean;
}

export const Container = styled.div`
  display: flex;
  /* padding: 2em 10em 2em 2em; */
  flex-direction: column;
  justify-content: flex-start;
`;

export const EventSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;

`;

export const EventsOption = styled.h3<SettingsProps>`
  justify-content: flex-start;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: var(--color-primay-grey);
  

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }

  ${({ isSelected }: SettingsProps) => isSelected && css`
    color: #046E8F;

    &:hover {
      cursor: default;
      font-weight: 400;
    }
  `}
`;

export const PresenceHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;

  .new-event {
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

    ${({ isClicked }: ButtonProps) => isClicked && css`
    &:hover {
      font-weight: 400;
    }
  `}
  }
`;

export const OptionsButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2.6em;
  border: 1px solid var(--color-primary-blue);
  border-radius: 4px;
  border-top: none;

  button {
    width: 10em;
    height: 3em;
    background: var(--color-primary-white);
    border: 1 px solid var(--color-primary-blue);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    text-align: center;
    color: var(--color-primary-blue);

    &:hover {
      font-weight: 600;
    }
  }
`;


export const MonthEventContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid #E5E5E5;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px; */
  
  width: 100%;
  min-height: 75vh;
  margin-top: 1.5em;
  `;

export const MonthEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 1em 2em;
`;

export const EventHeader = styled.div`
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

export const MonthEventHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2.5em;
`;

export const MonthEventBodyContainer = styled.div`
  margin-top: 2em;
  max-height: 60vh;
  overflow: auto;
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
