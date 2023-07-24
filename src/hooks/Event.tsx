/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';
import { AthleteData } from '../pages/Athletes/components/utils/interfaces';
import { EventData } from '../pages/Events/utils/interfaces';

interface EventContextData {
  listEvents: EventData[],
  setListEvents(events: EventData[]): void,
  filteredEvents?: EventData[],
  setFilteredEvents(events: EventData[]): void,
  selectedEvent?: EventData,
  setSelectedEvent(event: EventData): void,
  selectedMonth: MonthEvents,
  setSelectedMonth(month: MonthEvents): void,
  presenceAthletes: AthleteData[],
  setPresenceAthletes(athletes: AthleteData[]): void,
  // searchValue: string,
  // setSearchValue(searchValue: string): void,
  presenceAction: EventAction,
  setAddTrainning(): void,
  setAddGame(): void,
  setAddOther(): void,
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

interface MonthEvents {
  month: number,
  year: number,
}

interface EventAction {
  showAction: string,
}

interface ActionModalInfo {
  text: string,
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

  // const [searchValue, setSearchValue] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<MonthEvents>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  } as MonthEvents);

  const [presenceAthletes, setPresenceAthletes] = useState<AthleteData[]>([] as AthleteData[]);
  const [listEvents, setListEvents] = useState<EventData[]>([] as EventData[]);
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>([] as EventData[]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | undefined>(undefined as EventData | undefined);

  const [presenceAction, setCashAction] = useReducer(
    presenceReducer,
    athleteActionInitialState,
  );
  const [actionModalInfo, setActionModalInfo] = useState<ActionModalInfo | null>(null);

  const setAddTrainning = () => {
    setCashAction({
      type: EventActionType.ADD_TRAINNING,
      payload: {},
    });
  };


  const setAddGame = () => {
    setCashAction({
      type: EventActionType.ADD_GAME,
      payload: {},
    });
  };

  const setAddOther = () => {
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
  };


  const contextValues = {
    selectedMonth,
    setSelectedMonth,
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
    presenceAthletes,
    setPresenceAthletes,
    selectedEvent,
    setSelectedEvent,
    // searchValue,
    // setSearchValue,
    // selectedAthlete,
    // setSelectedAthlete,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useEvent(): EventContextData {
  return useContext(EventContext);
}
export { EventContext, EventsProvider, useEvent };
