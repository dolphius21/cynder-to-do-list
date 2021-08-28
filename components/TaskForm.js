import { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from './Button';

const TaskForm = () => {
  const [dueDate, setDueDate] = useState(null);

  return (
    <div className="card">
      <form className="form">
        <div className="form-row">
          <div className="form-group flex-1">
            <input
              type="text"
              className="input-field"
              id="username"
              placeholder="Add a new task..."
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
            <label htmlFor="input-date" className="input-label">
              Due Date
            </label>
          </div>
          <Button className="light-btn form-btn">Add Task</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
