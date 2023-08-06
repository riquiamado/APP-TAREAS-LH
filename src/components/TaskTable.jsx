/* eslint-disable react/prop-types */

import TaskRow from "./TaskRow";

const TaskTable = ({ tasks,toggleTask,showCompleted=false }) => {
    const taskTabletRows =(doneValue)=>{
        return (tasks.
            filter((task) => task.done===doneValue).map((task) => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>)
            
          ))
    }
  return (
    <div>
      <table className="table table-dark table-striped table-bordered border-secundary">
        <thead>
          <tr className="table-primary">
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTabletRows(showCompleted)
          }
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
