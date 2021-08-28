import { useState } from 'react';
import Task from './Task';
import data from '../services/data';
import styled from 'styled-components';

const TaskList = () => {
  const [tasks, setTasks] = useState(data);

  return (
    <div className="card">
      {tasks.map((task, index) => (
        <Task details={task} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
