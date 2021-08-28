import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => (props.outline ? 'transparent' : '#55c8c6')};
  border: ${(props) => (props.outline ? '1px solid #55c8c6' : 'none')};
  border-radius: 3rem;
  font-size: 1rem;
  text-transform: capitalize;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
