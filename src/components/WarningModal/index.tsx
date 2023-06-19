import React, { MouseEventHandler } from 'react';
import Button from '../Button';
import { Buttons, Container, ContainerBackground, Text } from './styles';

interface WarningModalProps {
  text: string;
  description: string;
  observation?: string;
  backOnClick: MouseEventHandler,
  continueOnClick: MouseEventHandler,
  mainColor: string,
  buttonText: string,
}

const WarningModal: React.FC<WarningModalProps> = ({
  text, description, observation, backOnClick, continueOnClick, mainColor, buttonText
}) => {

  return (
    <ContainerBackground>
      <Container>
        <Text>{text}</Text>
        <h4>{description}</h4>
        {observation && <p>{observation}</p>}
        <Buttons>
          <Button
            backgroundColor='var(--color-primary-white)'
            isFull={false}
            path=""
            text="Voltar"
            textColor="var(--color-primary-grey)"
            onClick={backOnClick}
          />
          <Button
            backgroundColor={mainColor}
            isFull
            path=""
            text={buttonText}
            textColor="var(--color-primary-white)"
            onClick={continueOnClick}
          />
        </Buttons>
      </Container>
    </ContainerBackground>
  );
};


export default WarningModal;