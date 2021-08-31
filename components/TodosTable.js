import SingleTodo from './SingleTodo';

const TodosTable = ({
  todos,
  onTodoDelete,
  onTodoCompleteToggle,
  onChangeFilterType,
  onCompletedTodosDelete,
}) => {
  return (
    <div className="card todos-table-container">
      <table className="todos-table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <SingleTodo
              todoDetails={todo}
              key={index}
              onTodoDelete={onTodoDelete}
              onTodoCompleteToggle={onTodoCompleteToggle}
            />
          ))}
        </tbody>
      </table>
      <div className="todos-table-footer">
        <p>{todos.length} items left</p>
        <div className="filter-menu">
          <button
            className="filter-btn active"
            onClick={() => onChangeFilterType('all')}
          >
            All
          </button>
          <button
            className="filter-btn"
            onClick={() => onChangeFilterType('complete')}
          >
            Completed
          </button>
          <button
            className="filter-btn"
            onClick={() => onChangeFilterType('overdue')}
          >
            Overdue
          </button>
        </div>
        <button
          className="clear-completed-btn"
          onClick={onCompletedTodosDelete}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodosTable;
