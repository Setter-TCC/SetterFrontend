import React from 'react';
import { Container } from './styles';
import NewAthlete from '../NewAthlete';
import InfoModal from '../../../../components/InfoModal';
import EditAthlete from '../EditAthlete';
import AthletesTableHeader from './AthleteTableHeader';
import AthletesTableBody from './AthleteTableBody';
import { useAthlete } from '../../../../hooks/Athlete';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const AthletesTable: React.FC = () => {
  const { athleteAction, actionModalInfo } = useAthlete();
  const renderConfigs: RenderConfigOptions = {
    addAthlete: <NewAthlete />,
    editAthlete: <EditAthlete />
  };

  return (
    <Container>
      {athleteAction && renderConfigs[athleteAction.showAction]}
      {actionModalInfo && <InfoModal text={actionModalInfo.text} />}
      <AthletesTableHeader />
      <AthletesTableBody />
    </Container>
  );

};

export default AthletesTable;
