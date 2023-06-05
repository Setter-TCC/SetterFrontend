import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  textColor: string,
  backgoundColor: string,
  isFull: boolean,
}

interface TextProps {
  textColor: string,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
  height:3em;
  cursor: pointer;

  background: ${props => props.backgoundColor};
  border: 1px solid ${props => props.textColor};
  border-radius: 10px;

  ${({ isFull }: ButtonContainerProps) => isFull && css`
    border: unset;
  `}
`;

export const Text = styled.h3<TextProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.textColor};

  &:hover {
    font-weight: 600;
  }
`;
