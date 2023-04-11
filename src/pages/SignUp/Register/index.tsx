import React, { useState } from 'react';
import { Container, Buttons, InputWrapper, Input, Title, Body, Step } from './styles';
import { IButton, IInputs } from '../../../components/utils/interfaces';
import { registerSteps } from '../utils/const';
import Button from '../../../components/Button';

export interface StepProps {
  step: string,
  title: string,
  inputs: IInputs[],
  buttons: {
    back?: IButton,
    next: IButton,
  },
  suits?: IButton[],
}
const Register: React.FC = () => {
  const [actualStep, setActualStep] = useState<StepProps>(registerSteps[0]);
  return (
    <Container>
      <Body>
        <Step>{actualStep.step}</Step>
        <Title>{actualStep.title}</Title>
        {actualStep.inputs.map(input => (
          <InputWrapper key={input.title}>
            <p>{input.title}</p>
            <Input type={input.type} />
          </InputWrapper>
        ))}
        <Buttons>
          {actualStep.buttons.back &&
            <Button backgroundColor={actualStep.buttons.back.backgroundColor}
              isFull={actualStep.buttons.back.isFull}
              path={actualStep.buttons.back.path}
              text={actualStep.buttons.back.text}
              textColor={actualStep.buttons.back.textColor}
              key={actualStep.buttons.back.text}
            />
          }
          <Button backgroundColor={actualStep.buttons.next.backgroundColor}
            isFull={actualStep.buttons.next.isFull}
            path={actualStep.buttons.next.path}
            text={actualStep.buttons.next.text}
            textColor={actualStep.buttons.next.textColor}
            key={actualStep.buttons.next.text}
          />
        </Buttons>
      </Body>
    </Container>
  );
};

export default Register;
