import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ThemeProvider } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import data from './data/tasks'


export default function App() {
  const [tasks, setTasks] = useLocalStorage('mini_tasks', data);
  const [filter, setFilter] = useState('all'); 
  const [search, setSearch] = useState('');

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    if (filter === 'active') return !task.completed && matchesSearch;
    if (filter === 'completed') return task.completed && matchesSearch;
    return matchesSearch;
  });

  return (
    <ThemeProvider>
      <div className="container py-4" style={{ maxWidth: '600px' }}>
        <Header />
        <TaskForm 
          onAddTask={handleAddTask}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <TaskList 
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </ThemeProvider>
  );
}