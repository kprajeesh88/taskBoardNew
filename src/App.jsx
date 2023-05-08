import "./App.scss";
import { TaskBordWrapper } from "./Components/TaskBordWrapper";
import { TaskForm } from "./Components/TaskForm";
import { TaskBoardContext } from "./Contexts/TaskBoardContext";

function App() {
  return (
    <TaskBoardContext>
      <div className="App">
        <TaskForm />
        <TaskBordWrapper />
      </div>
    </TaskBoardContext>
  );
}

export default App;
