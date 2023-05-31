import { AthleteData } from './interfaces';
import img1 from '../../../assets/athletes/img1.jpeg';

export const tableColumns = [
  '',
  'Nome',
  'Posição',
  'Telefone',
  'RG',
  'CPF',
  'Data de Nascimento',
  'Email',
  '',
];

export const athletePositions = [
  { key: 'setter', value: 'Levantador(a)' },
  { key: 'outsideHitter', value: 'Ponteiro(a)' },
  { key: 'opposite', value: 'Oposto(a)' },
  { key: 'middleBlocker', value: 'Central' },
  { key: 'libero', value: 'Líbero' }
];

export const athletes: AthleteData[] = [
  {
    id: '1',
    img: img1,
    name: 'Atleta Fulana de Tal',
    position: 'Posição 1',
    phone: '(11) 1234-5678',
    rg: '12345678',
    cpf: '123.456.789-00',
    birth: '01/01/1990',
    email: 'atleta1@example.com',
    isActive: true,
  },
  {
    id: '2',
    img: img1,
    name: 'Atleta Cicrana Beltrana',
    position: 'Posição 2',
    phone: '(11) 2345-6789',
    rg: '87654321',
    cpf: '987.654.321-00',
    birth: '02/02/1991',
    email: 'atleta2@example.com',
    isActive: true,
  },
  {
    id: '3',
    img: img1,
    name: 'Atleta Fulano de Tal Cicrana Beltrana',
    position: 'Posição 3',
    phone: '(11) 3456-7890',
    rg: '56781234',
    cpf: '456.789.123-00',
    birth: '03/03/1992',
    email: 'atleta3@example.com',
    isActive: false,
  },
];
