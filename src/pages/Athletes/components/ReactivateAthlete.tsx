import React from 'react';
import WarningModal from '../../../components/WarningModal';
import { useAthlete } from '../../../hooks/Athlete';

const ReactivateAthlete: React.FC = () => {
  const { setResetActions } = useAthlete();

  const handleReactivateAthlete = () => {
    // Reativar atleta
    setResetActions();
  };

  return (
    <WarningModal
      text='Tem certeza que deseja resativar este atleta?'
      description='A partir da reativação, este atleta será considerado para listagens e eventos futuros do time'
      backOnClick={setResetActions}
      continueOnClick={handleReactivateAthlete}
      mainColor='var(--color-primary-green)'
      buttonText='Reativar'
    />
  );

};

export default ReactivateAthlete;
