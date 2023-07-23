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
