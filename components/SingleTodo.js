import Link from 'next/link';
import { format } from 'date-fns';
import { GoCheck } from 'react-icons/go';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const SingleTodo = ({ todoDetails, onTodoDelete, onTodoCompleteToggle }) => {
  const { id, title, description, due_date, isComplete } = todoDetails;

  const formattedDueDate = format(new Date(due_date), 'MM/dd/yyyy');

  const overdue = !isComplete && due_date < new Date().toISOString();

  return (
    <tr className="todos-table-row">
      <td className="todos-table-check">
        <GoCheck
          className={`check-icon ${isComplete && 'complete-check-icon'}`}
          onClick={() => onTodoCompleteToggle(todoDetails)}
        />
      </td>
      <td className="todos-table-title">
        <Link href={`/todos/${id}`}>
          <a className={isComplete ? 'todos-table-title-complete' : undefined}>
            {title}
            {overdue && <span className="todos-table-overdue">overdue</span>}
            <span className={isComplete ? 'line' : undefined}></span>
          </a>
        </Link>
      </td>
      <td className="todos-table-description">
        {description.substring(0, 20) + '...'}
      </td>
      <td className="todos-table-due-date">{formattedDueDate}</td>
      <td className="todos-table-icons">
        <Link href={`/todos/${id}`}>
          <a>
            <FaPencilAlt className="todos-table-icon" />
          </a>
        </Link>
        <FaTrashAlt
          onClick={() => onTodoDelete(id)}
          className="todos-table-icon"
        />
      </td>
    </tr>
  );
};

export default SingleTodo;
