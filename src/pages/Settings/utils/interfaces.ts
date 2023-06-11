import format from 'date-fns/format';
import { formatEditDate, removeSymbols } from '../../../utils/format';

export interface TeamData {
  id: string,
  name: string,
  email: string,
  cnpj: string,
  suit: number,
}

export interface TeamBackData {
  id?: string,
  nome: string,
  email: string,
  cnpj: string,
  naipe: number,
}

export interface AdminData {
  id?: string,
  name: string,
  email: string,
  oldPassword: string,
  newPassword: string,
}

export interface AdminBackData {
  id?: string,
  nome: string,
  email: string,
  senha_antiga: string,
  senha_nova: string,
}

export interface CoachData {
  id: string,
  name: string,
  email: string,
  cpf?: string,
  rg?: string,
  cref?: string,
  phone: string,
  teamId?: string,
  isActive: boolean,
  startDate: string,
  endDate?: string,
}


export interface CoachBackData {
  id?: string
  nome: string,
  email: string,
  cpf: string,
  rg: string,
  cref: string,
  telefone: string,
  time_id?: string,
  ativo?: boolean,
  data_inicio: string,
  data_fim?: string,
}


export const translateEditCoachData = (data: CoachBackData, newData: CoachData): CoachBackData => {

  const editCoachData = {
    id: data.id,
    nome: newData.name ? newData.name : data.nome,
    email: newData.email ? newData.email : data.email,
    cpf: newData.cpf ? removeSymbols(newData.cpf) : data.cpf,
    rg: newData.rg ? removeSymbols(newData.rg) : data.rg,
    cref: newData.cref ? newData.cref : data.cref,
    telefone: newData.phone ? removeSymbols(newData.phone) : data.telefone,
    time_id: newData.teamId ? newData.teamId : data.time_id,
    ativo: newData.isActive ? newData.isActive : data.ativo,
    data_inicio: newData.startDate ? format(new Date(newData.startDate), 'yyyy-MM-dd\'T\'HH:mm:ss') : formatEditDate(data.data_inicio),
    data_fim: newData.endDate ? newData.endDate : data.data_fim,
  };

  return editCoachData;
};

export const translateCoachBackData = (data: CoachData): CoachBackData => {
  const translatedData: CoachBackData = {
    nome: data.name,
    email: data.email,
    cpf: data.cpf ? removeSymbols(data.cpf) : '',
    rg: data.rg ? removeSymbols(data.rg) : '',
    cref: data.cref ? data.cref : '',
    telefone: removeSymbols(data.phone) || '',
    time_id: data.teamId || '',
    ativo: true,
    data_inicio: format(new Date(data.startDate), 'yyyy-MM-dd\'T\'HH:mm:ss'),
  };

  return translatedData;
};


export const translateCoachFrontData = (data: CoachBackData): CoachData => {
  const translatedData: CoachData = {
    id: data.id || '',
    name: data.nome,
    email: data.email,
    cpf: data.cpf || '',
    rg: data.rg || '',
    cref: data.cref || '',
    phone: data.telefone || '',
    teamId: data.time_id || '',
    isActive: data.ativo || false,
    startDate: data.data_inicio || '',
    endDate: data.data_fim || '',
  };

  return translatedData;
};

export const translateAdminFrontData = (data: AdminBackData): AdminData => {
  const translatedData: AdminData = {
    id: data.id || '',
    name: data.nome,
    email: data.email,
    oldPassword: data.senha_antiga,
    newPassword: '',
  };
  console.log(translatedData);
  return translatedData;
};


export const translateTeamFrontData = (data: TeamBackData): TeamData => {
  const translatedData: TeamData = {
    id: data.id || '',
    name: data.nome,
    email: data.email,
    cnpj: data.cnpj || '',
    suit: data.naipe,
  };

  return translatedData;
};

export const translateEditAdminData = (data: AdminBackData, newData: AdminData): AdminBackData => {
  const editAdminData = {
    id: data.id,
    nome: newData.name ? newData.name : data.nome,
    email: newData.email ? newData.email : data.email,
    senha_antiga: newData.oldPassword ? newData.oldPassword : data.senha_antiga,
    senha_nova: newData.newPassword ? newData.newPassword : data.senha_nova,
  };

  return editAdminData;
};

export const translateEditTeamData = (data: TeamBackData, newData: TeamData): TeamBackData => {
  const editTeamData = {
    id: data.id,
    nome: newData.name ? newData.name : data.nome,
    email: newData.email ? newData.email : data.email,
    cnpj: newData.cnpj ? removeSymbols(newData.cnpj) : data.cnpj,
    naipe: newData.suit ? newData.suit : data.naipe,
  };

  return editTeamData;
};
