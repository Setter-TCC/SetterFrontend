import { EventData, EventType } from './interfaces';

export const formatEventName = (event: EventData) => {
  if (event.type == EventType.other) {
    return event.name;
  }
  else if (event.type == EventType.game) {
    return 'Jogo';
  }
  return 'Treino';
};
