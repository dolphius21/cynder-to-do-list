import { useState } from 'react';
import Task from './Task';
import fakeTasks, { deleteTask } from '../services/fakeTaskService';

const TasksList = () => {
  const [tasks, setTasks] = useState(fakeTasks);
  const [loading, setLoading] = useState(false);

  const handleTaskDelete = (task) => {
    const filteredTasks = tasks.filter((t) => t._id !== task._id);
    setTasks(filteredTasks);
  };

  return (
    <div className="card">
      <div className="tasks-header">
        <p className="tasks-header-title">My Tasks</p>
        <p className="tasks-header-due-date">Due Date:</p>
        <div className="tasks-header-padding"></div>
      </div>
      {tasks.map((task) => (
        <Task task={task} key={task._id} onTaskDelete={handleTaskDelete} />
      ))}
      <div className="tasks-footer">
        {tasks.length === 0 ? (
          <p>Yey! there are no tasks left to do.</p>
        ) : (
          <p>{tasks.length} items left</p>
        )}
        <div className="sort-menu"></div>
      </div>
    </div>
  );
};

export default TasksList;
