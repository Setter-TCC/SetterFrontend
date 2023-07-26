/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';
import { AthleteData } from '../pages/Athletes/components/utils/interfaces';
import { AthletePresence, EventData } from '../pages/Events/utils/interfaces';

interface EventContextData {
  athletesPresenceList?: AthletePresence[],
  setAthletesPresenceList(athletesPresenceList: AthletePresence[]): void,
  listEvents: EventData[],
  setListEvents(events: EventData[]): void,
  filteredEvents?: EventData[],
  setFilteredEvents(events: EventData[]): void,
  selectedEvent?: EventData,
  setSelectedEvent(event: EventData): void,
  activeAthletes: AthleteData[],
  setActiveAthletes(athletes: AthleteData[]): void,
  presenceAction: EventAction,
  setAddTrainning(isSelected: boolean): void,
  setAddGame(isSelected: boolean): void,
  setAddOther(isSelected: boolean): void,
  setResetActions(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum EventActionType {
  DEFAULT = 'DEFAULT',
  ADD_TRAINNING = 'ADD_TRAINNING',
  ADD_GAME = 'ADD_GAME',
  ADD_OTHER = 'ADD_OTHER',
  RESET_ACTION = 'RESET_ACTION',
}

interface EventAction {
  showAction: string,
}

interface ActionModalInfo {
  text: string,
  setResetActions(): void,
}

const athleteActionInitialState: EventAction = {
  showAction: '',
};

const presenceReducer = (state: EventAction, action: any) => {
  switch (action.type) {
  case EventActionType.ADD_TRAINNING:
    return {
      ...state,
      showAction: 'addTrainning',
    };
  case EventActionType.ADD_GAME:
    return {
      ...state,
      showAction: 'addGame',
    };
  case EventActionType.ADD_OTHER:
    return {
      ...state,
      showAction: 'addOther',
    };
  case EventActionType.RESET_ACTION:
    return {
      showAction: '',
    };
  default:
    return state;
  }
};

const EventContext = createContext({} as EventContextData);
const { Provider } = EventContext;

const EventsProvider = ({ children }: any): JSX.Element => {
  const [activeAthletes, setActiveAthletes] = useState<AthleteData[]>([] as AthleteData[]);
  const [athletesPresenceList, setAthletesPresenceList] = useState<AthletePresence[]>([] as AthletePresence[]);
  const [listEvents, setListEvents] = useState<EventData[]>([] as EventData[]);
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>([] as EventData[]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | undefined>(undefined);

  const [presenceAction, setCashAction] = useReducer(
    presenceReducer,
    athleteActionInitialState,
  );
  const [actionModalInfo, setActionModalInfo] = useState<ActionModalInfo | null>(null);

  const setAddTrainning = (isSelected = false) => {
    if (!isSelected) {
      setSelectedEvent(undefined);
    }
    setCashAction({
      type: EventActionType.ADD_TRAINNING,
      payload: {},
    });
  };


  const setAddGame = (isSelected = false) => {
    if (!isSelected) {
      setSelectedEvent(undefined);
    }
    setCashAction({
      type: EventActionType.ADD_GAME,
      payload: {},
    });
  };

  const setAddOther = (isSelected = false) => {
    if (!isSelected) {
      setSelectedEvent(undefined);
    }
    setCashAction({
      type: EventActionType.ADD_OTHER,
      payload: {},
    });
  };

  const setResetActions = () => {
    setCashAction({
      type: EventActionType.RESET_ACTION,
      payload: {},
    });
    setSelectedEvent(undefined);
  };


  const contextValues = {
    presenceAction,
    listEvents,
    setListEvents,
    filteredEvents,
    setFilteredEvents,
    setAddTrainning,
    setAddGame,
    setAddOther,
    setResetActions,
    actionModalInfo,
    setActionModalInfo,
    activeAthletes,
    setActiveAthletes,
    selectedEvent,
    setSelectedEvent,
    athletesPresenceList,
    setAthletesPresenceList,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useEvent(): EventContextData {
  return useContext(EventContext);
}
export { EventContext, EventsProvider, useEvent };
