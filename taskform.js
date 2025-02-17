import React from 'react';

function TaskForm({ taskInput, setTaskInput, onAddTask }) {
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskInput);
  };

  return (
    <form className="task-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskInput}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
