import { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from './Button';

const TodoListForm = ({ onAddTodo }) => {
  const DEFAULT_VALUES = { title: '', due_date: '', description: '' };

  const [values, setValues] = useState(DEFAULT_VALUES);

  const { title, description, due_date } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      due_date: new Date(due_date).toISOString(),
    };
    onAddTodo(newTodo);
    setValues(DEFAULT_VALUES);
  };

  const setFieldValue = (field, value) =>
    setValues({ ...values, [field]: value });

  console.log('vvv', values);

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group flex-1">
            <input
              type="text"
              className="input-field"
              placeholder="Add a new todo..."
              onChange={(e) => setFieldValue('title', e.target.value)}
              value={title}
              required
            />
            <label className="input-label">Create Todo</label>
          </div>
          <div className="form-group">
            <DatePicker
              className="input-date"
              selected={due_date}
              placeholderText="Select date..."
              onChange={(date) => setFieldValue('due_date', date)}
              id="input-date"
            />
            <label className="input-label">Due Date</label>
          </div>
          <Button
            className="default-btn light-primary-btn form-btn"
            type="submit"
          >
            Add Todo
          </Button>
        </div>
        <div className="form-row">
          <div className="form-group-desc">
            <div className="input-desc">
              <textarea
                rows="2"
                placeholder="Add a todo description..."
                onChange={(e) => setFieldValue('description', e.target.value)}
                value={description}
              ></textarea>
            </div>
            <label className="input-label">Todo Description</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoListForm;
