import SingleTask from './SingleTask';

const TaskTable = ({
  tasks,
  onTaskDelete,
  onTaskCompleteToggle,
  onChangeFilterType,
  onCompletedTaskDelete,
}) => {
  return (
    <div className="card tasks-table-container">
      <table className="tasks-table">
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
          {tasks.map((task, index) => (
            <SingleTask
              taskDetails={task}
              key={index}
              onTaskDelete={onTaskDelete}
              onTaskCompleteToggle={onTaskCompleteToggle}
            />
          ))}
        </tbody>
      </table>
      <div className="tasks-table-footer">
        <p>{tasks.length} items left</p>
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
        <button className="clear-completed-btn" onClick={onCompletedTaskDelete}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskTable;
