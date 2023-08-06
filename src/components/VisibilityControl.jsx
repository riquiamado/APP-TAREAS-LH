/* eslint-disable react/prop-types */

const VisibilityControl = ({ setShowCompleted, cleanTask, isChecked }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      cleanTask();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label>Show Task Done</label>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};

export default VisibilityControl;
