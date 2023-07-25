import { formatDateTimezone } from '../../../utils/format';
import { AthleteData } from '../../Athletes/components/utils/interfaces';

export interface AthletePresence {
  id: string;
  name: string;
  state: AthleteStateEnum;
  justification?: string;
}

export interface AthletePresenceBack {
  id_atleta: string;
  nome: string;
  estado: number;
  justificativa?: string;
}

export interface EventData {
  id?: string;
  teamId: string,
  name?: string;
  type: EventType;
  date: string;
  local?: string;
  presences?: number;
  faults?: number;
  justifiedFaults?: number;
  opponent?: string;
  championship?: string;
  observation?: string;
  listAthletes: AthletePresence[];
}

export interface EventDataBack {
  id?: string;
  time_id: string;
  tipo_evento: EventType;
  data: string;
  local?: string;
  adversario?: string;
  campeonato?: string;
  observacao?: string;
  lista_de_atletas: AthletePresenceBack[];

}

export interface AthleteState {
  [nome: string]: AthleteStateEnum.fault | AthleteStateEnum.justified | AthleteStateEnum.presence;
}

export enum AthleteStateEnum {
  presence = '1',
  fault = '2',
  justified = '3',
}

export enum EventType {
  game = 1,
  trainning = 2,
  other = 3,
}

export const eventTypeText = (value: EventType): string => {
  const eventTypes: { [key in EventType]: string } = {
    [EventType.trainning]: 'Treino',
    [EventType.game]: 'Jogo',
    [EventType.other]: 'Outro',
  };

  return eventTypes[value];
};

export const convertAthletesDataToAthletesPresenceList = (data: AthleteData[]): AthletePresence[] => {
  const athletes: AthletePresence[] = data.map((athlete) => {
    return {
      id: athlete.id,
      name: athlete.name,
      state: AthleteStateEnum.presence,
    };
  });
  return athletes;
};


export const translateEventToBackData = (data: EventData): EventDataBack => {
  const event: EventDataBack = {
    time_id: data.teamId,
    tipo_evento: data.type,
    data: formatDateTimezone(data.date) || '',
    local: data.local || '',
    adversario: data.opponent || '',
    campeonato: data.championship || '',
    observacao: data.observation || '',
    lista_de_atletas: data.listAthletes.map((athlete) => {
      return {
        id_atleta: athlete.id,
        nome: athlete.name,
        estado: Number(athlete.state),
        justificativa: athlete.justification || '',
      };
    }),
  };

  return event;
};

export const translateEventToFrontData = (data: EventDataBack[]): EventData[] => {
  const events: EventData[] = data.map((event) => {
    return {
      id: event.id,
      teamId: event.time_id,
      type: event.tipo_evento,
      date: event.data,
      local: event.local || '-',
      opponent: event.adversario || '-',
      championship: event.campeonato || '-',
      observation: event.observacao || '-',
      listAthletes: event.lista_de_atletas.map((athlete) => {
        return {
          id: athlete.id_atleta,
          name: athlete.nome,
          state: athlete.estado.toString() as AthleteStateEnum,
          justification: athlete.justificativa || '',
        };
      }),
    };
  });

  return events;
};
