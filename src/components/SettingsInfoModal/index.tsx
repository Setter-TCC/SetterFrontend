import React from 'react';
import Button from '../Button';
import { Container, ContainerBackground, Text } from './styles';
import { useSettings } from '../../hooks/Settings';

interface InfoModalProps {
  text: string;
  setResetActions(): void;
}

const SettingsInfoModal: React.FC<InfoModalProps> = ({
  text, setResetActions,
}) => {
  const { setActionModalInfo } = useSettings();

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


export default SettingsInfoModal;
