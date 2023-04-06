import React from 'react';
import { Container, Description, Title } from './styles';
import { setterCallContent } from '../utils/const';


const CustomFeature: React.FC = () => {
  return (
    <Container>
      <Title>{setterCallContent.title}</Title>
      <Description>{setterCallContent.description}</Description>
    </Container>
  );
};

export default CustomFeature;
