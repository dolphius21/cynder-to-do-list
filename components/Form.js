import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from './Button';
import Input from './Input';

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  .add-task {
    display: flex;
    flex: 1;
    margin-right: 1rem;
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: '1rem',
    marginRight: '1rem',
    width: 200
  }
}));

const Form = () => {
  return (
    <StyledForm>
      <div className="add-task">
        <Input />
        <Button className="add-task-btn">Add Task</Button>
      </div>
      <div className="form-group">
        <TextField
          id="datetime-local"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </StyledForm>
  );
};

export default Form;
