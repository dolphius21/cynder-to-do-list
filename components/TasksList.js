import { useState } from 'react';
import Task from './Task';
import fakeTasks from '../services/fakeTaskService';

const TasksList = () => {
  const [tasks, setTasks] = useState(fakeTasks);
  const [loading, setLoading] = useState(false);

  const handleTaskDelete = (id) => {
    const filteredTasks = tasks.filter((t) => t._id !== id);
    setTasks(filteredTasks);
  };
  const handleTaskCompleteToggle = (task) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.indexOf(task);
    tasksCopy[index] = { ...task, isComplete: !task.isComplete };
    setTasks(tasksCopy);
  };

  const handleTaskSort = () => {};

  return (
    <div className="card">
      <div className="tasks-header">
        <p className="tasks-header-title">Task Title</p>
        <p className="tasks-header-due-date">Due Date</p>
        <div className="tasks-header-padding"></div>
      </div>
      {tasks.map((task) => (
        <Task
          taskDetails={task}
          key={task._id}
          onTaskDelete={handleTaskDelete}
          onTaskCompleteToggle={handleTaskCompleteToggle}
        />
      ))}
      <div className="tasks-footer">
        {tasks.length === 0 ? (
          <p>Yey! there are no tasks left to do.</p>
        ) : (
          <p>{tasks.length} items left</p>
        )}
        <div className="sort-menu">
          <button className="sort-btn active">All</button>
          <button className="sort-btn">Completed</button>
          <button className="sort-btn">Overdue</button>
        </div>
        <button className="clear-completed-btn">Clear Completed</button>
      </div>
    </div>
  );
};

export default TasksList;
