/* eslint-disable react/prop-types */

const TaskRow = ({ task,toggleTask }) => {
  return (
    <tr>
      <td>
      {task.name}
        <input
          type="checkbox"
          checked={task.done}
          style={{ marginRight: "10px" }}
          onChange={() => toggleTask(task)}
        />
        
      </td>
    </tr>
  );
};

export default TaskRow;
