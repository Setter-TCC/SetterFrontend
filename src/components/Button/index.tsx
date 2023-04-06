import React from 'react';
import { ButtonContainer, Text } from './styles';
import { IButton } from '../utils/interfaces';

const Button: React.FC<IButton> = ({ text, textColor, backgroundColor, isFull }) => {
  return (
    <ButtonContainer
      backgoundColor={backgroundColor}
      textColor={textColor}
      isFull={isFull}
      // onClick={() => { }}
    >
      <Text textColor={textColor}>{text}</Text>
    </ButtonContainer>
  );
};

export default Button;
