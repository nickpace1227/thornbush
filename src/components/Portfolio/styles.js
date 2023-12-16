import styled from "styled-components";

export const Wrapper = styled.div`

@media only screen and (min-width: 1500px) {
    .large-screen {
        display: grid;
        grid-template-columns: 25% 25% 25%;
        column-gap: 5%;
        row-gap: 5%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
    .portfolio-photo {
        height: auto;
        width: 100%;
    }
}

@media only screen and (851px <= width <= 1499px) {
    .medium-screen {
        display: grid;
        grid-template-columns: 25% 25%;
        column-gap: 10%;
        row-gap: 5%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
    .portfolio-photo {
        height: auto;
        width: 115%;
    }
}

@media only screen and (max-width: 850px) {
    .small-screen {
        display: grid;
        grid-template-columns: 50%;
        column-gap: 5%;
        row-gap: 5%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
    .portfolio-photo {
        height: auto;
        width: 100%;
    }
}

.portfolio-intro {
    text-align: center;
    margin: 15px 15%;
}
`