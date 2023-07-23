/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';
import { AthleteData } from '../pages/Athletes/components/utils/interfaces';

interface EventContextData {
  selectedMonth: MonthEvents,
  setSelectedMonth(month: MonthEvents): void,
  presenceAthletes: AthleteData[],
  setPresenceAthletes(athletes: AthleteData[]): void,
  // searchValue: string,
  // setSearchValue(searchValue: string): void,
  presenceAction: EventAction,
  setListEvents(): void,
  setFilterTrainning(): void,
  setFilterGame(): void,
  setFilterOther(): void,
  setAddTrainning(): void,
  setAddGame(): void,
  setAddOther(): void,
  setResetActions(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum EventActionType {
  LIST_EVENTS = 'LIST_EVENTS',
  DEFAULT = 'DEFAULT',
  FILTER_TRAINNING = 'FILTER_TRAINNING',
  FILTER_GAME = 'FILTER_GAME',
  FILTER_OTHER = 'FILTER_OTHER',
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
  case EventActionType.LIST_EVENTS:
    return {
      ...state,
      showAction: 'listEvents',
    };
  case EventActionType.FILTER_TRAINNING:
    return {
      ...state,
      showAction: 'filterTrainning',
    };
  case EventActionType.FILTER_GAME:
    return {
      ...state,
      showAction: 'filterGame',
    };
  case EventActionType.FILTER_OTHER:
    return {
      ...state,
      showAction: 'filterOther',
    };
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

  const [presenceAction, setCashAction] = useReducer(
    presenceReducer,
    athleteActionInitialState,
  );
  const [actionModalInfo, setActionModalInfo] = useState<ActionModalInfo | null>(null);

  const setListEvents = () => {
    setCashAction({
      type: EventActionType.LIST_EVENTS,
      payload: {},
    });
  };

  const setFilterTrainning = () => {
    setCashAction({
      type: EventActionType.FILTER_TRAINNING,
      payload: {},
    });
  };

  const setFilterGame = () => {
    setCashAction({
      type: EventActionType.FILTER_GAME,
      payload: {},
    });
  };

  const setFilterOther = () => {
    setCashAction({
      type: EventActionType.FILTER_OTHER,
      payload: {},
    });
  };

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
    setListEvents,
    setFilterTrainning,
    setFilterGame,
    setFilterOther,
    setAddTrainning,
    setAddGame,
    setAddOther,
    setResetActions,
    actionModalInfo,
    setActionModalInfo,
    presenceAthletes,
    setPresenceAthletes,
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
