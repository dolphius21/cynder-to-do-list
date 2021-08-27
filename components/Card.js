import styled from "styled-components";

const StyledCard = styled.div`
    position: relative;
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 5px 15px rgba(70, 82, 190, 0.05);
    min-width: 800px;
`

const Card = ({ children }) => {
    return (
        <StyledCard>{children}</StyledCard>
    );
}

export default Card;