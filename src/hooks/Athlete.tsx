/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';
import { AthleteData } from '../pages/Athletes/components/utils/interfaces';

interface AthleteContextData {
  athletes: AthleteData[],
  setAthletes(athletes: AthleteData[]): void,
  searchValue: string,
  setSearchValue(searchValue: string): void,
  athleteAction: AthleteAction,
  setAddAthlete(): void,
  setEditAthlete(athlete: AthleteData): void,
  setDeactivateAthlete(athlete: AthleteData): void,
  setActivateAthlete(athlete: AthleteData): void,
  setResetActions(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum AthleteActionType {
  DEFAULT = 'DEFAULT',
  ADD_ATHLETE = 'ADD_ATHLETE',
  EDIT_ATHLETE = 'EDIT_ATHLETE',
  DEACTIVATE_ATHLETE = 'DEACTIVATE_ATHLETE',
  ACTIVATE_ATHLETE = 'ACTIVATE_ATHLETE',
  RESET_ACTION = 'RESET_ACTION',
}


interface AthleteAction {
  showAction: string,
  selectedAthlete: AthleteData | null
}

interface ActionModalInfo {
  text: string,
}

const athleteActionInitialState: AthleteAction = {
  showAction: '',
  selectedAthlete: null,
};

const athleteReducer = (state: AthleteAction, action: any) => {
  switch (action.type) {
  case AthleteActionType.ADD_ATHLETE:
    return {
      ...state,
      showAction: 'addAthlete',
    };

  case AthleteActionType.EDIT_ATHLETE:
    return {
      ...state,
      showAction: 'editAthlete',
      selectedAthlete: action.payload.athlete
    };
  case AthleteActionType.DEACTIVATE_ATHLETE:
    return {
      ...state,
      showAction: 'deactivateAthlete',
      selectedAthlete: action.payload.athlete
    };
  case AthleteActionType.ACTIVATE_ATHLETE:
    return {
      ...state,
      showAction: 'activateAthlete',
      selectedAthlete: action.payload.athlete
    };
  case AthleteActionType.RESET_ACTION:
    return {
      showAction: '',
      selectedAthlete: null,
    };
  default:
    return state;
  }
};

const AthleteContext = createContext({} as AthleteContextData);
const { Provider } = AthleteContext;
const AthleteProvider = ({ children }: any): JSX.Element => {

  const [athletes, setAthletes] = useState<AthleteData[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const [athleteAction, setAthleteAction] = useReducer(
    athleteReducer,
    athleteActionInitialState,
  );
  const [actionModalInfo, setActionModalInfo] = useState<ActionModalInfo | null>(null);

  const setAddAthlete = () => {
    setAthleteAction({
      type: AthleteActionType.ADD_ATHLETE,
      payload: {},
    });
  };

  const setEditAthlete = (athlete: AthleteData) => {
    setAthleteAction({
      type: AthleteActionType.EDIT_ATHLETE,
      payload: { athlete },
    });
  };


  const setDeactivateAthlete = (athlete: AthleteData) => {
    setAthleteAction({
      type: AthleteActionType.DEACTIVATE_ATHLETE,
      payload: { athlete },
    });
  };


  const setActivateAthlete = (athlete: AthleteData) => {
    setAthleteAction({
      type: AthleteActionType.ACTIVATE_ATHLETE,
      payload: { athlete },
    });
  };

  const setResetActions = () => {
    setAthleteAction({
      type: AthleteActionType.RESET_ACTION,
      payload: {},
    });
  };


  const contextValues = {
    athleteAction,
    setAddAthlete,
    setEditAthlete,
    setDeactivateAthlete,
    setActivateAthlete,
    setResetActions,
    actionModalInfo,
    setActionModalInfo,
    setAthletes,
    athletes,
    searchValue,
    setSearchValue,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useAthlete(): AthleteContextData {
  return useContext(AthleteContext);
}
export { AthleteContext, AthleteProvider, useAthlete };