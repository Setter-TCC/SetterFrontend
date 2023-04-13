import { ReactNode } from 'react';
import { Body, Step, Title, InputWrapper } from './styles';

type FormProps = {
  step: string,
  title: string,
  children: ReactNode
}

export function FormWrapper({ step, title, children }: FormProps) {

  return (
    <Body>
      <Step>{step}</Step>
      <Title>{title}</Title>
      <InputWrapper>{children}</InputWrapper>
    </Body>
  );
}
