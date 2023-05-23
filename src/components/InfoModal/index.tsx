import React from 'react';
import Button from '../Button';
import { Container, ContainerBackground, Text } from './styles';

interface InfoModalProps {
  text: string;
  closeModal: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  text, closeModal
}) => {

  return (
    <ContainerBackground>
      <Container>
        <Text>{text}</Text>
        <Button
          backgroundColor='var(--color-primary-blue)'
          isFull={true}
          path=""
          text="Continuar"
          textColor="var(--color-primary-white)"
          onClick={closeModal}
        />
      </Container>
    </ContainerBackground>
  );
};


export default InfoModal;