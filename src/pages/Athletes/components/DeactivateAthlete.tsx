import React from 'react';
import WarningModal from '../../../components/WarningModal';
import { useAthlete } from '../../../hooks/Athlete';


const DeactivateAthlete: React.FC = () => {
  const { setResetActions, setActionModalInfo } = useAthlete();

  const handleDeactivateAthlete = () => {
    // Desativar atleta
    setActionModalInfo({ text: 'Atleta desativado(a) com sucesso!' });
    setResetActions();
  };

  return (
    <WarningModal
      text='Tem certeza que deseja desativar este atleta?'
      description='Os registros antigos serão mantidos, mas o atleta não será mais contabilizado para novos registros ou mensalidades.'
      observation='É possível reativar o atleta posteriormente'
      backOnClick={setResetActions}
      continueOnClick={handleDeactivateAthlete}
      mainColor='var(--color-primary-orange)'
      buttonText='Desativar'
    />
  );

};

export default DeactivateAthlete;
