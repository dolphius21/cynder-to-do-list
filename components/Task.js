import { format } from 'date-fns';
import { GoCheck } from 'react-icons/go';

const Task = ({ details }) => {
  const { title, dueDate, completedDate } = details;

  const formattedDueDate = format(new Date(dueDate), 'MM/dd/yyyy');

  return (
    <div className="task-row">
      <GoCheck className="check-icon" />
      <h3 className="task-title">{title}</h3>
      <p className="task-due-date">Due on {formattedDueDate}</p>
    </div>
  );
};

export default Task;
