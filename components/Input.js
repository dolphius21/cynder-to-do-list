import styled from 'styled-components';

const StyledInput = styled.input`
    background: #fff;
    border: 1px solid #eff1f6;
    padding: 0.5rem;
    display: block;
    font-size: 1rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
    flex: 1;
`

const Input = () => {
    return (
        <StyledInput/>
    );
}

export default Input;