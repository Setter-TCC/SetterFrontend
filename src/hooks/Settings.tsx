/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, useState } from 'react';
import { CoachData } from '../pages/Settings/utils/interfaces';

interface SettingsContextData {
  settingsAction: SettingsAction,
  setEditTeam(): void,
  setEditAdmin(): void,
  setEditCoach(): void,
  setDeactivateCoach(coach: CoachData): void,
  setResetToEditCoach(): void,
  setResetToEditTeam(): void,
  setResetToEditAdmin(): void,
  actionModalInfo: ActionModalInfo | null,
  setActionModalInfo(info: ActionModalInfo | null): void,
}

export enum SettingActionType {
  DEFAULT = 'DEFAULT',
  EDIT_TEAM = 'EDIT_TEAM',
  EDIT_ADMIN = 'EDIT_ADMIN',
  EDIT_COACH = 'EDIT_COACH',
  DEACTIVATE_COACH = 'DEACTIVATE_COACH',
  RESET_TO_EDIT_COACH = 'RESET_COACH',
  RESET_TO_EDIT_TEAM = 'RESET_TEAM',
  RESET_TO_EDIT_ADMIN = 'RESET_ADMIN',
}

interface SettingsAction {
  showAction: string,
  selectedCoach?: CoachData
}

interface ActionModalInfo {
  text: string,
  setResetActions(): void,
}

const settingsActionInitialState: SettingsAction = {
  showAction: 'editTeam',
};

const athleteReducer = (state: SettingsAction, action: any) => {
  switch (action.type) {
  case SettingActionType.EDIT_TEAM:
    return {
      ...state,
      showAction: 'editTeam',

    };

  case SettingActionType.EDIT_ADMIN:
    return {
      ...state,
      showAction: 'editAdmin',
    };
  case SettingActionType.EDIT_COACH:
    return {
      ...state,
      showAction: 'editCoach',
    };
  case SettingActionType.DEACTIVATE_COACH:
    return {
      ...state,
      showAction: 'deactivateCoach',
      selectedCoach: action.payload.coach
    };
  case SettingActionType.RESET_TO_EDIT_COACH:
    return {
      ...state,
      showAction: 'editCoach',
    };
  case SettingActionType.RESET_TO_EDIT_TEAM:
    return {
      showAction: 'editTeam',
    };
  case SettingActionType.RESET_TO_EDIT_ADMIN:
    return {
      showAction: 'editAdmin',
    };
  default:
    return state;
  }
};

const SettingsContext = createContext({} as SettingsContextData);
const { Provider } = SettingsContext;
const SettingsProvider = ({ children }: any): JSX.Element => {

  const [searchValue, setSearchValue] = useState('');

  const [settingsAction, setSettingsAction] = useReducer(
    athleteReducer,
    settingsActionInitialState,
  );
  const [actionModalInfo, setActionModalInfo] = useState<ActionModalInfo | null>(null);


  const setEditAdmin = () => {
    setSettingsAction({
      type: SettingActionType.EDIT_ADMIN,
      payload: {},
    });
  };

  const setEditTeam = () => {
    setSettingsAction({
      type: SettingActionType.EDIT_TEAM,
      payload: {},
    });
  };

  const setEditCoach = () => {
    setSettingsAction({
      type: SettingActionType.EDIT_COACH,
      payload: {},
    });
  };
  const setDeactivateCoach = (coach: CoachData) => {
    setSettingsAction({
      type: SettingActionType.DEACTIVATE_COACH,
      payload: { coach },
    });
  };

  const setResetToEditCoach = () => {
    setSettingsAction({
      type: SettingActionType.RESET_TO_EDIT_COACH,
      payload: {},
    });
  };

  const setResetToEditTeam = () => {
    setSettingsAction({
      type: SettingActionType.RESET_TO_EDIT_TEAM,
      payload: {},
    });
  };

  const setResetToEditAdmin = () => {
    setSettingsAction({
      type: SettingActionType.RESET_TO_EDIT_ADMIN,
      payload: {},
    });
  };


  const contextValues = {
    settingsAction,
    setEditTeam,
    setEditAdmin,
    setEditCoach,
    setResetToEditCoach,
    setResetToEditTeam,
    setResetToEditAdmin,
    setDeactivateCoach,
    actionModalInfo,
    setActionModalInfo,
    searchValue,
    setSearchValue,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

function useSettings(): SettingsContextData {
  return useContext(SettingsContext);
}
export { SettingsContext, SettingsProvider, useSettings };
