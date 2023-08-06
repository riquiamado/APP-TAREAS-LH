import { useEffect, useState } from "react";
import "./App.css";
import TaskCreators from "./components/TaskCreators";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (task) => {
    if (!taskItems.find((item) => item.name === task)) {
      setTaskItems([...taskItems, { name: task, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((item) =>
        item.name == task.name ? { ...item, done: !item.done } : item
      )
    );
  };

  const cleanTask = () => {
    setTaskItems(taskItems.filter((item) => !item.done));
    setShowCompleted(false);
  };

  return (
    <div className="bg-dark vh-100 text-red">
      <div className="container">
      <TaskCreators createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <VisibilityControl
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTask={cleanTask}
        isChecked={showCompleted}
      />
      {showCompleted && (
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
      </div>
    </div>
  );
}

export default App;
