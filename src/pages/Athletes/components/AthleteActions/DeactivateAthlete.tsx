import React from 'react';
import WarningModal from '../../../../components/WarningModal';
import { useAthlete } from '../../../../hooks/Athlete';
import { useAuth } from '../../../../auth/AuthContext';
import api from '../../../../services/api';


const DeactivateAthlete: React.FC = () => {
  const { setResetActions, setActionModalInfo } = useAthlete();
  const { selectedAthlete } = useAthlete().athleteAction;
  const { admin } = useAuth();

  const handleDeactivateAthlete = async () => {
    try {
      await api.post('/api/athlete/deactivate', {
        atleta_id: selectedAthlete?.id,
        time_id: admin.teamId,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      setActionModalInfo({ text: 'Atleta desativado(a) com sucesso!' });
      setResetActions();
    } catch (err) {
      console.log(err);
      setActionModalInfo({ text: 'Erro ao desativar atleta!' });
    }
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
