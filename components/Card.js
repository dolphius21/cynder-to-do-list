import styled from "styled-components";

const StyledCard = styled.div`
    position: relative;
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 5px 15px rgba(70, 82, 190, 0.05);
`

const Card = ({ children }) => {
    return (
        <StyledCard>Card</StyledCard>
    );
}

export default Card;