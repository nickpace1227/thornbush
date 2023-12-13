import styled from "styled-components";

export const Wrapper = styled.div`
* {
    display: flex;
    justify-content: center;
    align-items: row;
}

.header-logo {
    display: flex;
    justify-content: flex-start;
    align-items: row;
    width: 100px;
    height: 100px;
    margin: 20px;
}

.company-name {
    display: flex;
    align-items: center;
}

.nav-items {
    display: flex;
    padding: 10px;
    align-items: center;
}

.nav-links {
    text-decoration: none;
}
`;