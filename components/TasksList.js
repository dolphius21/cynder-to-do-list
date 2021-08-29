import Task from './Task';

const TasksList = ({ tasks, onTaskDelete, onTaskCompleteToggle }) => {
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
        {tasks.length === 0 ? (
          <p>Yey! there are no tasks left to do.</p>
        ) : (
          <p>{tasks.length} items left</p>
        )}
        <div className="sort-menu">
          <button className="sort-btn active">All</button>
          <button className="sort-btn">Completed</button>
          <button className="sort-btn">Overdue</button>
        </div>
        <button className="clear-completed-btn">Clear Completed</button>
      </div>
    </div>
  );
};

export default TasksList;
