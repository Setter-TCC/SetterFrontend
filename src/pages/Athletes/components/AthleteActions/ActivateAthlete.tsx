import React from 'react';
import WarningModal from '../../../../components/WarningModal';
import { useAthlete } from '../../../../hooks/Athlete';
import { useAuth } from '../../../../auth/AuthContext';
import api from '../../../../services/api';

const ActivateAthlete: React.FC = () => {
  const { setResetActions, setActionModalInfo } = useAthlete();
  const { selectedAthlete } = useAthlete().athleteAction;
  const { admin } = useAuth();

  const handleActivateAthlete = async () => {
    try {
      await api.post('/api/athlete/activate', {
        atleta_id: selectedAthlete?.id,
        time_id: admin.teamId,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      setActionModalInfo({ text: 'Atleta reativado(a) com sucesso!' });
      setResetActions();
    } catch (err) {
      console.log(err);
      setActionModalInfo({ text: 'Erro ao ativar atleta!' });
    }
  };

  return (
    <WarningModal
      text='Tem certeza que deseja resativar este atleta?'
      description='A partir da reativação, este atleta será considerado para listagens e eventos futuros do time'
      backOnClick={setResetActions}
      continueOnClick={handleActivateAthlete}
      mainColor='var(--color-primary-green)'
      buttonText='Reativar'
    />
  );

};

export default ActivateAthlete;
