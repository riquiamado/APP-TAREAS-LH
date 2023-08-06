import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskCreators = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault()
   createNewTask(newTaskName)
  localStorage.setItem("tasks",newTaskName)
  setNewTaskName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="enter new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button >Create Task</button>
      </form>
    </div>
  );
};

export default TaskCreators;
