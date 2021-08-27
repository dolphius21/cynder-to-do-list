import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const StyledForm = styled.form`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
`

const Form = () => {
    return ( 
        <StyledForm>
            <Input/>
            <Button className="add-task-btn">Add Task</Button>
        </StyledForm>
     );
}
 
export default Form;