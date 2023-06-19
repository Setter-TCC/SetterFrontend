import { ReactNode } from 'react';
import { Title, InputWrapper, Container } from './styles';

type FormProps = {
  title: string,
  children: ReactNode
}

export function FormDrawerWrapper({ title, children }: FormProps) {

  return (
    <Container>
      <Title>{title}</Title>
      <InputWrapper>{children}</InputWrapper>
    </Container>
  );
}
