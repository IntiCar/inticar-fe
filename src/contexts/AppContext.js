'use client';
import { createContext, useReducer } from 'react';

const initialState = {
  darkMode: false,
  language: 'en',
  fishList: []
};

const AppStateContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

function appReducer(prevState, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return { ...prevState, darkMode: !prevState.darkMode };
    }
    case 'CHANGE_LANGUAGE': {
      return { ...prevState, language: prevState.language === 'id' ? 'en' : 'id' };
    }
    case 'UPDATE_FISH_LIST': {
      return { ...prevState, fishList: action.data };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export { AppStateContext, AppDispatchContext, AppProvider, appReducer };
