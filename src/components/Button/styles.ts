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
  width: 180px;
  height:50px;
  cursor: pointer;

  background: ${props => props.backgoundColor};
  border: 2px solid ${props => props.textColor};
  border-radius: 10px;

  ${({ isFull, backgoundColor }: ButtonContainerProps) => isFull && css`
    border: 2px solid ${backgoundColor};
  `}

  
`;

export const Text = styled.h3<TextProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.textColor};
`;
