import React, { createContext, useReducer, useContext, useMemo, useEffect } from 'react';

const ContextGlobal = createContext();

const initialState = {
  theme: 'light',
  apiData: null,
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };

    case 'SET_API_DATA':
      return { ...state, apiData: action.payload };

    default:
      return state;
      
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ContextGlobal);
};