import { CoachBackData, translateAthleteFrontData } from './interfaces';

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


export const translatedCoachTemplate = translateAthleteFrontData(coachDataTemplate);
