import { createContext, useContext, useReducer, useState } from 'react';
import { AthleteData } from '../pages/Athletes/components/EditAthlete';

interface AthleteContextData {
  athleteAction: AthleteAction,
  setAddAthlete(): void,
  setEditAthlete(athlete: AthleteData): void,
  setDeactivateAthlete(athlete: AthleteData): void,
  setReactivateAthlete(athlete: AthleteData): void,
  setResetActions(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum AthleteActionType {
  DEFAULT = 'DEFAULT',
  ADD_ATHLETE = 'ADD_ATHLETE',
  EDIT_ATHLETE = 'EDIT_ATHLETE',
  DEACTIVATE_ATHLETE = 'DEACTIVATE_ATHLETE',
  REACTIVATE_ATHLETE = 'REACTIVATE_ATHLETE',
  RESET_ACTION = 'RESET_ACTION',
}


interface AthleteAction {
  showAction: string,
  selectedAthlete: AthleteData | undefined
}

interface ActionModalInfo {
  text: string,
}

const athleteActionInitialState: AthleteAction = {
  showAction: '',
  selectedAthlete: undefined,
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
  case AthleteActionType.REACTIVATE_ATHLETE:
    return {
      ...state,
      showAction: 'reactivateAthlete',
      selectedAthlete: action.payload.athlete
    };
  case AthleteActionType.RESET_ACTION:
    return {
      showAction: '',
      selectedAthlete: undefined,
    };
  default:
    return state;
  }
};

const AthleteContext = createContext({} as AthleteContextData);
const { Provider } = AthleteContext;
const AthleteProvider = ({ children }: any): JSX.Element => {

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


  const setReactivateAthlete = (athlete: AthleteData) => {
    setAthleteAction({
      type: AthleteActionType.REACTIVATE_ATHLETE,
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
    setReactivateAthlete,
    setResetActions,
    actionModalInfo,
    setActionModalInfo
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useAthlete(): AthleteContextData {
  return useContext(AthleteContext);
}
export { AthleteContext, AthleteProvider, useAthlete };