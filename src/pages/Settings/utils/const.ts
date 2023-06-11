import { Suit } from '../../../enums';
import { AdminBackData, AdminData, CoachBackData, CoachData, TeamBackData, TeamData, translateAdminFrontData, translateCoachFrontData, translateTeamFrontData } from './interfaces';

export const coachDataDefault: CoachData = {
  id: '',
  name: '',
  email: '',
  cpf: '',
  rg: '',
  cref: '',
  phone: '',
  teamId: '',
  isActive: false,
  startDate: '',
  endDate: '',
};

export const adminDataDefault: AdminData = {
  id: '',
  name: '',
  email: '',
  oldPassword: '',
  newPassword: '',
};

export const teamDataDefault: TeamData = {
  id: '',
  name: '',
  email: '',
  cnpj: '',
  suit: 1,
};

export const coachDataTemplate: CoachBackData = {
  id: '1',
  nome: 'Teste',
  cpf: '12345678910',
  rg: '123456789',
  email: 'teste@email.com',
  telefone: '12345678910',
  cref: '123456789',
  time_id: '1',
  ativo: false,
  data_inicio: '2021-01-01',
};


export const translatedCoachTemplate = translateCoachFrontData(coachDataTemplate);

export const adminDataTemplate: AdminBackData = {
  id: '1',
  nome: 'Teste',
  email: 'teste@email.com',
  senha_antiga: 'pass',
  senha_nova: '',
};

export const translatedAdminTemplate = translateAdminFrontData(adminDataTemplate);

export const teamDataTemplate: TeamBackData = {
  id: '1',
  nome: 'Teste',
  email: 'time@time.com',
  cnpj: '',
  naipe: Suit.men,
};

export const tranlatedTeamTemplate = translateTeamFrontData(teamDataTemplate);

