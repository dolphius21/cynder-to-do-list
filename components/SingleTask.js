import Link from 'next/link';
import { format } from 'date-fns';
import { GoCheck } from 'react-icons/go';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const SingleTask = ({ taskDetails, onTaskDelete, onTaskCompleteToggle }) => {
  const { _id, title, description, dueDate, isComplete } = taskDetails;

  const formattedDueDate = format(new Date(dueDate), 'MM/dd/yyyy');

  const overdue = !isComplete && dueDate < new Date().toISOString();

  return (
    <tr className="tasks-table-row">
      <td className="tasks-table-check">
        <GoCheck
          className={`check-icon ${isComplete && 'complete-check-icon'}`}
          onClick={() => onTaskCompleteToggle(taskDetails)}
        />
      </td>
      <td className="tasks-table-title">
        <Link href={`/tasks/${_id}`}>
          <a className={isComplete ? 'tasks-table-title-complete' : undefined}>
            {title}
            {overdue && <span className="tasks-table-overdue">overdue</span>}
            <span className={isComplete ? 'line' : undefined}></span>
          </a>
        </Link>
      </td>
      <td className="tasks-table-description">
        {description.substring(0, 20) + '...'}
      </td>
      <td className="tasks-table-due-date">{formattedDueDate}</td>
      <td className="tasks-table-icons">
        <Link href={`/tasks/${_id}`}>
          <a>
            <FaPencilAlt className="tasks-table-icon" />
          </a>
        </Link>
        <FaTrashAlt
          onClick={() => onTaskDelete(_id)}
          className="tasks-table-icon"
        />
      </td>
    </tr>
  );
};

export default SingleTask;
