import styled from "styled-components";

export const Wrapper = styled.div`

.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-logo {
    width: 100px;
    height: 100px;
    margin: 20px;
}

.header-words {
    display: flex;
    flex-direction: column;
}

.company-name {
    margin: 0px;
}

.nav-bar {
    display: flex;
    flex-direction: row;
}

.list {
    padding-left: 0px;
    display: flex;
    flex-direction: row;
}

.list-item {
    list-style-type: none;
}

.link-item {
    underline: none;
    margin: 0px 33px 0px 0px;
    text-decoration: none;
}
`;