import { createContext, useReducer, useMemo } from "react";

export const initialState = {
  theme: localStorage.getItem('theme') || 'light', 
  apiData: null
}

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return {
        ...state,
        theme: newTheme,
      };

    case 'SET_API_DATA':
      return {
        ...state,
        apiData: action.payload,
      };

    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};