import React from 'react';
import { Container, Buttons, LogoBox, LogoName } from './styles';
import Button from '../Button';
import logo from '../../assets/icons/logo.svg';
import { IButton } from '../utils/interfaces';

interface SetterFeaturesProps {
  buttons: IButton[];
}

const SetterFeatures: React.FC<SetterFeaturesProps> = ({ buttons }) => {

  return (
    <Container>
      <LogoBox>
        <img src={logo} />
        <LogoName>Setter</LogoName>
      </LogoBox>
      <Buttons>
        {buttons.map(button => (
          <Button
            key={button.text}
            text={button.text}
            backgroundColor={button.backgroundColor}
            textColor={button.textColor}
            isFull={button.isFull} />
        ))}
      </Buttons>
    </Container>
  );
};

export default SetterFeatures;
