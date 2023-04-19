import React from 'react';
import { Container, Buttons, LogoBox, LogoName } from './styles';
import Button from '../Button';
import logo from '../../assets/icons/logo.svg';
import { IButton } from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  buttons?: IButton[];
}

const Header: React.FC<HeaderProps> = ({ buttons }) => {

  const navigate = useNavigate();
  return (
    <Container>
      <LogoBox>
        <img src={logo} />
        <LogoName>Setter</LogoName>
      </LogoBox>
      <Buttons>
        {buttons && buttons.map(button => (
          <Button
            key={button.text}
            text={button.text}
            backgroundColor={button.backgroundColor}
            textColor={button.textColor}
            isFull={button.isFull}
            path={button.path}
            onClick={() => navigate(button.path)}
          />
        ))}
      </Buttons>
    </Container>
  );
};

export default Header;
