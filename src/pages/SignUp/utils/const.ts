import { IButton } from '../../../components/utils/interfaces';
import { Suit } from '../../../enums';

export const buttons: IButton[] = [
  {
    text: 'Entrar',
    textColor: 'var(--color-primary-blue)',
    backgroundColor: 'var(--color-primary-white)',
    isFull: false,
    path: '/signin',
  },
];

export const suits = [
  {
    name: 'Feminino',
    type: Suit.women,
  },
  {
    name: 'Masculino',
    type: Suit.men,
  },
  {
    name: 'Misto',
    type: Suit.mixed,
  }
];
