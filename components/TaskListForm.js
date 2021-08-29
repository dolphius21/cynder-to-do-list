import { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from './Button';

const TaskListForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      _id: new Date().toISOString(),
      title,
      description,
      dueDate: new Date(dueDate).toISOString(),
      isComplete: false
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group flex-1">
            <input
              type="text"
              className="input-field"
              placeholder="Add a new task..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
            <label className="input-label">Create Task</label>
          </div>
          <div className="form-group">
            <DatePicker
              className="input-date"
              selected={dueDate}
              placeholderText={format(new Date(), 'MM/dd/yyyy')}
              onChange={(date) => setDueDate(date)}
              id="input-date"
            />
            <label className="input-label">Due Date</label>
          </div>
          <Button
            className="default-btn light-primary-btn form-btn"
            type="submit"
          >
            Add Task
          </Button>
        </div>
        <div className="form-row">
          <div className="form-group mt">
            <textarea
              className="input-desc"
              cols="75"
              rows="2"
              placeholder="task description..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <label className="input-label">Task Description</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskListForm;
