import React from 'react';
import { Container } from './styles';
import InfoModal from '../../../../components/InfoModal';
import AthletesTableHeader from './AthleteTableHeader';
import AthletesTableBody from './AthleteTableBody';
import { useAthlete } from '../../../../hooks/Athlete';
import { AddAthlete, EditAthlete, DeactivateAthlete, ReactivateAthlete } from '../AthleteActions';

interface RenderConfigOptions {
  [key: string]: React.ReactElement;
}

const AthletesTable: React.FC = () => {
  const { athleteAction, actionModalInfo } = useAthlete();
  const renderConfigs: RenderConfigOptions = {
    addAthlete: <AddAthlete />,
    editAthlete: <EditAthlete />,
    deactivateAthlete: <DeactivateAthlete />,
    reactivateAthlete: <ReactivateAthlete />,
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
