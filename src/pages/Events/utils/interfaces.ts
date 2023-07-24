export interface AthletePresence {
  id: string;
  name: string;
  state: AthleteStateEnum;
  justification?: string;
}

export interface EventData {
  id: number;
  name?: string;
  type: EventType;
  date: string;
  local?: string;
  presences: number;
  faults: number;
  justifiedFaults: number;
  opponent?: string;
  championship?: string;
  observation?: string;
  listAthletes?: AthletePresence[];
}

export interface AthleteState {
  [nome: string]: 'presence' | 'fault' | 'justified';
}

export enum AthleteStateEnum {
  presence = 'presence',
  fault = 'fault',
  justified = 'justified',
}

export enum EventType {
  trainning = 1,
  game = 2,
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
