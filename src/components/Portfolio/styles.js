import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 200px;
    height: auto;

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

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.new-col-1 {
    display: flex;
    flex-direction: column;
}

.portfolio-photo {
    height: auto;
    width: 500px;
}

.portfolio-intro {
    text-align: center;
    margin: 15px 15%;
}
`