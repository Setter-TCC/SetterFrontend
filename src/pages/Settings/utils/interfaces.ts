import { convertToISODate, formatDateTimezone, removeSymbols } from '../../../utils/format';

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
  phone: string,
  username?: string,
  oldPassword: string,
  newPassword: string,
}

export interface AdminBackData {
  id?: string,
  nome: string,
  email: string,
  telefone: string,
  nome_usuario?: string,
  senha: string,
  nova_senha: string,
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
  isActive?: boolean,
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


export const transformCoachData = (data: CoachData, newData: CoachData, teamId: string): CoachData => {
  // Pega o coach selecionado e os novos dados e une os dois
  const transformedCoachData = {
    id: data.id || '',
    name: newData.name ? newData.name : data.name,
    email: newData.email ? newData.email : data.email,
    cpf: newData.cpf ? removeSymbols(newData.cpf) : removeSymbols(data.cpf ? data.cpf : ''),
    rg: newData.rg ? removeSymbols(newData.rg) : removeSymbols(data.rg ? data.rg : ''),
    cref: newData.cref ? newData.cref : (data.cref ? data.cref : ''),
    phone: newData.phone ? removeSymbols(newData.phone) : data.phone,
    teamId,
    startDate: newData.startDate ? formatDateTimezone(newData.startDate) : formatDateTimezone(data.startDate),
    endDate: newData.endDate ? formatDateTimezone(newData.endDate) : '',
  };

  return transformedCoachData;
};

export const translateCoachBackData = (data: CoachData): CoachBackData => {
  // Como o tratamento já foi feito na função anterior, só preciso alterar o nome das chaves
  let translatedData: CoachBackData = {
    nome: data.name,
    email: data.email,
    cpf: data.cpf || '',
    rg: data.rg || '',
    cref: data.cref || '',
    telefone: data.phone || '',
    time_id: data.teamId || '',
    data_inicio: data.startDate,
  };

  if (data.id) {
    translatedData = {
      ...translatedData,
      id: data.id,
    };
  }
  if (data.endDate) {
    translatedData = {
      ...translatedData,
      data_fim: data.endDate,
    };
  }
  return translatedData;
};


export const translateCoachFrontData = (data: CoachBackData, teamId: string): CoachData => {
  const translatedData: CoachData = {
    id: data.id || '',
    name: data.nome,
    email: data.email,
    cpf: data.cpf || '',
    rg: data.rg || '',
    cref: data.cref || '',
    phone: data.telefone || '',
    teamId: data.time_id || teamId,
    isActive: true,
    startDate: convertToISODate(data.data_inicio) || '',
    endDate: data.data_fim || '',
  };

  return translatedData;
};

export const translateAdminFrontData = (data: AdminBackData): AdminData => {
  const translatedData: AdminData = {
    id: data.id || '',
    name: data.nome,
    email: data.email,
    phone: data.telefone,
    username: data.nome_usuario,
    oldPassword: '',
    newPassword: '',
  };
  return translatedData;
};

export const transformAdminData = (data: AdminData, newData: AdminData): AdminData => {
  const transformedAdminData = {
    id: data.id || '',
    name: newData.name ? newData.name : data.name,
    email: newData.email ? newData.email : data.email,
    phone: newData.phone ? removeSymbols(newData.phone) : data.phone,
    username: data.username,
    oldPassword: newData.oldPassword || '',
    newPassword: newData.newPassword || '',
  };

  return transformedAdminData;
};

export const translateAdminBackData = (data: AdminData): AdminBackData => {
  const translatedData: AdminBackData = {
    id: data.id || '',
    nome: data.name,
    email: data.email,
    telefone: data.phone,
    nome_usuario: data.username,
    senha: data.oldPassword,
    nova_senha: data.newPassword,
  };

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

export const transformTeamData = (data: TeamData, newData: TeamData): TeamData => {
  const transformedTeamData = {
    id: data.id || '',
    name: newData.name ? newData.name : data.name,
    email: newData.email ? newData.email : data.email,
    cnpj: newData.cnpj ? removeSymbols(newData.cnpj) : data.cnpj,
    suit: newData.suit ? newData.suit : data.suit,
  };
  return transformedTeamData;
};

export const translateEditTeamData = (data: TeamData): TeamBackData => {
  const editTeamData = {
    id: data.id,
    nome: data.name,
    email: data.email,
    cnpj: data.cnpj || '',
    naipe: data.suit || 1,
  };

  return editTeamData;
};
