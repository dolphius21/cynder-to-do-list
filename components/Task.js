import { format } from 'date-fns';
import { GoCheck } from 'react-icons/go';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Task = ({ taskDetails, onTaskDelete, onTaskCompleteToggle }) => {
  const { _id, title, dueDate, isComplete } = taskDetails;

  const formattedDueDate = format(new Date(dueDate), 'MM/dd/yyyy');

  return (
    <div className="task-row">
      <div className="task-title">
        <GoCheck
          className={`check-icon ${isComplete && 'complete-check-icon'}`}
          onClick={() => onTaskCompleteToggle(taskDetails)}
        />
        <h3>{title}</h3>
      </div>
      <p className="task-due-date">{formattedDueDate}</p>
      <FaPencilAlt className="task-icon" />
      <FaTrashAlt onClick={() => onTaskDelete(_id)} className="task-icon" />
    </div>
  );
};

export default Task;
