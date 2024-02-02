import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ActionType } from './types';

interface AppState {
  count: number;
}

interface Action {
  type: ActionType;
}

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { count: 0 });

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const UseAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de AppProvider');
  }
  return context;
};
