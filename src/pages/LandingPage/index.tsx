import React from 'react';
import { Container, Body, InfoBox } from './styles';
import team from '../../assets/images/team.svg'
import SetterFeatures from './SetterFeatures';
import Header from '../../components/Header';
import SetterCall from './SetterCall';

const LandingPage: React.FC = () => {

  return (
    <Container>
      <Header />
      <Body>
        <InfoBox>
          <SetterCall />
          <SetterFeatures />
        </InfoBox>
        <img className='team-work' src={team} />

      </Body>
    </Container>
  )
}

export default LandingPage;
