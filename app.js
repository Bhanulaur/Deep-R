import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (taskText) => {
    if (taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
        <TaskForm
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          onAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTaskCompletion={handleToggleTaskCompletion}
        />
      </header>
    </div>
  );
}

export default App;
