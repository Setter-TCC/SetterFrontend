import React from 'react';
import Button from '../Button';
import { Container, ContainerBackground, Text } from './styles';
import { useEvent } from '../../hooks/Event';

interface InfoModalProps {
  text: string;
  setResetActions(): void;
}

const EventsInfoModal: React.FC<InfoModalProps> = ({
  text, setResetActions,
}) => {
  const { setActionModalInfo } = useEvent();

  const handleClick = () => {
    setActionModalInfo(null);
    setResetActions();
  };

  return (
    <ContainerBackground>
      <Container>
        <Text>{text}</Text>
        <Button
          backgroundColor='var(--color-primary-blue)'
          isFull
          path=""
          text="Continuar"
          textColor="var(--color-primary-white)"
          onClick={handleClick}
        />
      </Container>
    </ContainerBackground>
  );
};


export default EventsInfoModal;
