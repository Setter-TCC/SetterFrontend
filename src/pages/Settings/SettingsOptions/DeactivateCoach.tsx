import React from 'react';
import WarningModal from '../../../components/WarningModal';
import { useSettings } from '../../../hooks/Settings';
import { useAuth } from '../../../auth/AuthContext';
import api from '../../../services/api';

const DeactivateCoach: React.FC = () => {
  const { setActionModalInfo, setResetToEditCoach } = useSettings();
  const { settingsAction } = useSettings();
  const { admin } = useAuth();

  const handleDeactivateCoach = async () => {
    try {
      await api.post('/api/coach/deactivate', {
        tecnico_id: settingsAction.selectedCoach?.id,
        time_id: admin.teamId,
        data_fim: settingsAction.selectedCoach?.endDate
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      setActionModalInfo({ text: 'Técnico desativado(a) com sucesso!', setResetActions: setResetToEditCoach });
    } catch (err) {
      console.log(err);
      setActionModalInfo({ text: 'Erro ao desativar atleta!', setResetActions: setResetToEditCoach });
    }
  };

  return (
    <WarningModal
      text='Tem certeza que deseja desativar este técnico?'
      description='Ao definir uma data de saída para o técnico, você estará o desativando, podendo adicionar outro técnico ao time.'
      observation='Não será possível reativar o técnico posteriormente'
      backOnClick={setResetToEditCoach}
      continueOnClick={handleDeactivateCoach}
      mainColor='var(--color-primary-orange)'
      buttonText='Desativar'
    />
  );
};

export default DeactivateCoach;
