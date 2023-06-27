import React from 'react';
import Button from '../Button';
import { Container, ContainerBackground, Text } from './styles';
import { useCash } from '../../hooks/Cash';

interface InfoModalProps {
  text: string;
}

const CashInfoModal: React.FC<InfoModalProps> = ({
  text
}) => {
  const { setActionModalInfo, setResetActions } = useCash();

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


export default CashInfoModal;