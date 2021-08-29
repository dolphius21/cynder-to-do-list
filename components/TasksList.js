import Task from './Task';

const TasksList = ({
  tasks,
  onTaskDelete,
  onTaskCompleteToggle,
  onChangeFilterType
}) => {
  return (
    <div className="card">
      <div className="tasks-header">
        <p className="tasks-header-title">Task Title</p>
        <p className="tasks-header-due-date">Due Date</p>
        <div className="tasks-header-padding"></div>
      </div>
      {tasks.map((task, index) => (
        <Task
          taskDetails={task}
          key={index}
          onTaskDelete={onTaskDelete}
          onTaskCompleteToggle={onTaskCompleteToggle}
        />
      ))}

      <div className="tasks-footer">
        <p>{tasks.length} items left</p>
        <div className="sort-menu">
          <button
            className="sort-btn active"
            onClick={() => onChangeFilterType('all')}
          >
            All
          </button>
          <button
            className="sort-btn"
            onClick={() => onChangeFilterType('complete')}
          >
            Completed
          </button>
          <button
            className="sort-btn"
            onClick={() => onChangeFilterType('overdue')}
          >
            Overdue
          </button>
        </div>
        <button className="clear-completed-btn">Clear Completed</button>
      </div>
    </div>
  );
};

export default TasksList;
