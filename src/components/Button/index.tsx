import React from 'react';
import { ButtonContainer, Text } from './styles';
import { IButton } from '../utils/interfaces';

const Button: React.FC<IButton> = ({ text, textColor, backgroundColor, isFull, onClick, isDisabled }) => {
  return (
    <ButtonContainer
      backgoundColor={backgroundColor}
      textColor={textColor}
      isFull={isFull}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Text textColor={textColor}>{text}</Text>
    </ButtonContainer>
  );
};

export default Button;
