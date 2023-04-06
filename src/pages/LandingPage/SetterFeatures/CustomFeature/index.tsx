import React from 'react';
import { Container, Description, Title } from './styles';
import { SetterFeature } from '../../utils/interfaces';


const CustomFeature: React.FC<SetterFeature> = ({ icon, title, description }) => {
  return (
    <Container>
      <img src={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default CustomFeature;
