import React from 'react';
import { ButtonContainer, Text } from './styles';

interface ButtonProps {
  text: string,
  textColor: string,
  backgroundColor: string,
  isFull: boolean,
}
const Button: React.FC<ButtonProps> = ({ text, textColor, backgroundColor, isFull }) => {
  return (
    <ButtonContainer
      backgoundColor={backgroundColor}
      textColor={textColor}
      isFull={isFull}
      onClick={() => { }}
    >
      <Text textColor={textColor}>{text}</Text>
    </ButtonContainer>
  );
};

export default Button;
