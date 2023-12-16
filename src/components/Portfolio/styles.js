import styled from "styled-components";

export const Wrapper = styled.div`

@media only screen and (min-width: 1251px) {
    .large-screen {
        display: grid;
        grid-template-columns: 350px 350px 350px;
        column-gap: 75px;
        row-gap: 50px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
    .portfolio-photo {
        height: auto;
        width: 350px;
    }
}

@media only screen and (751px <= width <= 1250px) {
    .medium-screen {
        display: grid;
        grid-template-columns: 350px 350px;
        column-gap: 75px;
        row-gap: 50px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
    .portfolio-photo {
        height: auto;
        width: 350px;
    }
}

@media only screen and (max-width: 750px) {
    .small-screen {
        display: grid;
        grid-template-columns: 350px;
        column-gap: 75px;
        row-gap: 50px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
    .portfolio-photo {
        height: auto;
        width: 350px;
    }
}

.portfolio-intro {
    text-align: center;
    margin: 0px 25%;
}
`