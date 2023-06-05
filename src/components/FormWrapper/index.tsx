import { ReactNode } from 'react';
import { Body, Step, Title, InputWrapper } from './styles';

type FormProps = {
  step?: string,
  title: string,
  inputBackgroundColor: string,
  children: ReactNode
}

export function FormWrapper({ step, title, inputBackgroundColor, children }: FormProps) {

  return (
    <Body>
      <Step>{step}</Step>
      <Title>{title}</Title>
      <InputWrapper backgroundColor={inputBackgroundColor}>{children}</InputWrapper>
    </Body>
  );
}
