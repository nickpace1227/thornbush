import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 200px;
    background-color: green;

.column {
    display: grid;
    column-gap: 5%;

    text-align: center;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1500px) {
        grid-template-columns: 25% 25% 25%;  
    }

    @media only screen and (851px <= width <= 1499px) {
        grid-template-columns: 25% 25%;
    }

    @media only screen and (max-width: 850px) {
        grid-template-columns: 50%;
    }
}

.portfolio-photo {
    height: auto;
    width: 100%;
}

.portfolio-intro {
    text-align: center;
    margin: 15px 15%;
}
`