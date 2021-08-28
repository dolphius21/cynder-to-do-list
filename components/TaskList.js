import { useState } from 'react';
import Task from './Task';
import data from '../services/data';
import styled from 'styled-components';

const StyledTaskList = styled.div``;

const TaskList = () => {
  const [tasks, setTasks] = useState(data);

  return (
    <StyledTaskList>
      {tasks.map((task, index) => (
        <Task details={task} key={index} />
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
