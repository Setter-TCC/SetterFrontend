import styled, { css } from 'styled-components';

interface SettingsProps {
  isSelected: boolean;
}
export const Container = styled.div`
  max-height: 100vh;
  display: flex;
  padding-left: 2em;
  margin-top: 3em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SettingsSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;

`;

export const SettingsOption = styled.h3<SettingsProps>`
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
