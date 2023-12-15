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

.nav-bar a {
    padding: .5em;
    border-radius: 5px;
}

.nav-bar a:hover {
    background-color: rgba(0, 0, 0, .3);
    border: 5px;
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