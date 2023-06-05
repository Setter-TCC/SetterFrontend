import React from 'react';
import { Container } from './styles';
import SignUpCall from './SignUpCall';
import Register from './Register';

const SignUp: React.FC = () => {

  return (
    <Container>
      <SignUpCall />
      <Register />
    </Container>
  );
};

export default SignUp;
