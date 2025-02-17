import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask, onToggleTaskCompletion }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTaskCompletion={onToggleTaskCompletion}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
