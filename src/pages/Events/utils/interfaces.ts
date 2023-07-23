export interface PresenceListAthlete {
  athleteId: string;
  athleteName: string;
  athletePresence: boolean;
  athleteFault: boolean;
  athleteJustifiedFault: boolean;
  athleteJustification?: string;
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
  listAthletes?: PresenceListAthlete[];
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
