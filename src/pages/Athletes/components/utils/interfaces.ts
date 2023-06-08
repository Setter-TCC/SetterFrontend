import { format } from 'date-fns';
import { removeSymbols } from '../../../../utils/format';

export interface AthleteData {
  id: string,
  name: string,
  email: string,
  cpf: string,
  rg: string,
  birth: string,
  phone: string,
  position: string,
  teamId?: string,
  isActive: boolean,
}

export interface AthleteBackData {
  id?: string
  nome: string,
  email: string,
  cpf: string,
  rg: string,
  data_nascimento: string,
  telefone: string,
  posicao: string,
  time_id?: string,
  ativo?: boolean,
}

interface AthletePosition {
  type: number,
  value: string,
}

enum AthletePositionEnum {
  outsideHitter = 1,
  setter = 2,
  middleBlocker = 3,
  libero = 4,
  oppositeHitter = 5,
}

export const athletePositions: AthletePosition[] = [
  { type: AthletePositionEnum.outsideHitter, value: 'Ponteiro(a)' },
  { type: AthletePositionEnum.setter, value: 'Levantador(a)' },
  { type: AthletePositionEnum.middleBlocker, value: 'Central' },
  { type: AthletePositionEnum.libero, value: 'Líbero' },
  { type: AthletePositionEnum.oppositeHitter, value: 'Oposto(a)' },
];

export const translateAthleteBackData = (data: AthleteData): AthleteBackData => {
  const translatedData: AthleteBackData = {
    nome: data.name,
    email: data.email,
    cpf: removeSymbols(data.cpf) || '',
    rg: removeSymbols(data.rg) || '',
    data_nascimento: format(new Date(data.birth), 'yyyy-MM-dd\'T\'HH:mm:ss'),
    telefone: removeSymbols(data.phone) || '',
    posicao: data.position ? data.position.toString() : AthletePositionEnum.outsideHitter.toString(),
    time_id: data.teamId || '',
  };

  return translatedData;
};

export const translateAthleteFrontData = (data: AthleteBackData[]): AthleteData[] => {
  const translatedData: AthleteData[] = data.map((athlete) => ({
    id: athlete.id || '',
    name: athlete.nome,
    email: athlete.email,
    cpf: athlete.cpf || '',
    rg: athlete.rg || '',
    birth: athlete.data_nascimento || '',
    phone: athlete.telefone || '',
    position: athlete.posicao || '',
    isActive: athlete.ativo || false,
  }));

  return translatedData;
};
