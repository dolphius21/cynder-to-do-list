import Link from 'next/link';
import { format } from 'date-fns';
import { GoCheck } from 'react-icons/go';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const SingleTask = ({ taskDetails, onTaskDelete, onTaskCompleteToggle }) => {
  const { _id, title, dueDate, isComplete } = taskDetails;

  const formattedDueDate = format(new Date(dueDate), 'MM/dd/yyyy');

  const overdue = !isComplete && dueDate < new Date().toISOString();

  return (
    <div className="task-row">
      <div className="task-title">
        <GoCheck
          className={`check-icon ${isComplete && 'complete-check-icon'}`}
          onClick={() => onTaskCompleteToggle(taskDetails)}
        />
        <Link href={`/tasks/${_id}`}>
          <a>
            <h3 className={isComplete ? 'task-title-complete' : undefined}>
              {title}
              {overdue && <span className="task-overdue">overdue</span>}
              <span className={isComplete ? 'line' : undefined}></span>
            </h3>
          </a>
        </Link>
      </div>
      <p className={`task-due-date ${overdue && 'date-overdue'}`}>
        {formattedDueDate}
      </p>
      <FaPencilAlt className="task-icon" />
      <FaTrashAlt onClick={() => onTaskDelete(_id)} className="task-icon" />
    </div>
  );
};

export default SingleTask;
