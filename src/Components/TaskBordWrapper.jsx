import { useContext } from "react";
import { TaskBoardDataConext } from "../Contexts/TaskBoardContext";

export const TaskBordWrapper = () => {
  const state = useContext(TaskBoardDataConext);

  console.log("state", state);

  return <div id="taskBoard">
    
  </div>;
};
