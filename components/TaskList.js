import Task from './Task'
import tasks from '../data/data'
import styled from 'styled-components';

const StyledTaskList = styled.div`

`

const TaskList = () => {
    return ( 
        <StyledTaskList>
            {tasks.map((task, index) => (
                <Task details={task} key={index}/>
            ))}
        </StyledTaskList>
     );
}
 
export default TaskList;