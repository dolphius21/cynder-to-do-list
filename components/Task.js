import styled from "styled-components";
import {format} from "date-fns";

const StyledTask = styled.div`
    padding: 0.1rem;
    border-bottom: 1px solid #c2c2d6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #445470;
    
    .task-title,
    .task-due-date {
        margin: 0.5rem 0;
    }
`

const Task = ({details}) => {
    const {title, dueDate, completedDate} = details;

    const formattedDueDate = format(new Date(dueDate), 'MM/dd/yyyy')

    return ( 
        <StyledTask>

            <h3 className="task-title">{title}</h3>
            <p className="task-due-date">{formattedDueDate}</p>
        </StyledTask>
     );
}

export default Task;