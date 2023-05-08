export const TaskForm = () => {
  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input type="text" className="taskInput" />
        <button className="taskSubmit">Submit</button>
      </div>
    </div>
  );
};
