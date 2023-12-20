import styled from 'styled-components';

export const Wrapper = styled.div`
position: absolute;
bottom: 0;
width: 100%;

    .main-footer {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 0;
        width: 100%;
        height: 80px;
        margin-top: 50px;
        background-color: wheat;
    }

    .footer-content {
        display: flex;
        align-items: center;
    }

    .footer-words {
        margin: 15px;
    }

    .instagram-logo {
        display: flex;
        align-items: center;
        height: 50px;
        weight: 50px;
    }

    .instagram-logo:hover {
        cursor: pointer;
    }
`