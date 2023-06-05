import React from 'react';
import { Container, List } from './styles';
import CustomFeature from './CustomFeature';
import { topFeatures, bottomFeatures } from '../utils/const';


const SetterFeatures: React.FC = () => {

  return (
    <Container>
      <List>
        {topFeatures.map(feature => (
          <CustomFeature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </List>
      <List>
        {bottomFeatures.map(feature => (
          <CustomFeature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </List>
    </Container>
  );
};

export default SetterFeatures;
