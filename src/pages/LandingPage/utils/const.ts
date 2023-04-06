import teamData from '../../../assets/icons/teamData.svg';
import admins from '../../../assets/icons/admins.svg';
import calendar from '../../../assets/icons/calendar.svg';
import cashFlow from '../../../assets/icons/cashFlow.svg';
import clock from '../../../assets/icons/clock.svg';
import presence from '../../../assets/icons/presence.svg';
import uniform from '../../../assets/icons/uniform.svg';
import { SetterFeature } from './interfaces';
import { IButton } from '../../../components/utils/interfaces';

export const topFeatures: SetterFeature[] = [
  {
    icon: teamData,
    title: 'Dados do Time',
    description: 'Mantenha os dados dos participantes armazenados',
  },
  {
    icon: cashFlow,
    title: 'Fluxo de Caixa',
    description: 'Controle o que entra e sai do caixa do time',
  },
  {
    icon: uniform,
    title: 'Uniformes',
    description: 'Administre os uniformes do time e quem os possui',
  },
  {
    icon: presence,
    title: 'Presença',
    description: 'Saiba quem está presente nos treinos e jogos',
  },
];

export const bottomFeatures: SetterFeature[] = [
  {
    icon: calendar,
    title: 'Calendário de Jogos',
    description: 'Saiba quando acontecerão os próximos jogos',
  },
  {
    icon: clock,
    title: 'Lembretes e Avisos',
    description: 'Receba lembretes de jogos e crie alertas para todos do time',
  },
  {
    icon: admins,
    title: 'Admins',
    description: 'Convide mais pessoas para administrar o time',
  },
];

export const setterCallContent = {
  title: 'Tenha seu time de voleibol em suas mãos',
  description: 'Com o Setter, é possível fazer o gerenciamento de todas as áreas do seu time em apenas um só lugar'
};

export const buttons: IButton[] = [
  {
    text: 'Criar Time',
    textColor: 'var(--color-primary-blue)',
    backgroundColor: 'var(--color-primary-white)',
    isFull: false,
  },
  {
    text: 'Entrar',
    textColor: 'var(--color-primary-white)',
    backgroundColor: 'var(--color-primary-blue)',
    isFull: true,
  },

];