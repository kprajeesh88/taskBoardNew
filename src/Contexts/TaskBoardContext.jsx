import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/useReducer";

export const TaskBoardDataConext = createContext();

export const TaskBoardContext = ({ children }) => {
  const [state, disapatch] = useReducer(reducer, initialState);
  return (
    <TaskBoardDataConext.Provider value={state}>
      {children}
    </TaskBoardDataConext.Provider>
  );
};
