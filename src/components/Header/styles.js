import styled from "styled-components";
import HeaderBird from "../../assets/images/HeaderBird.jpg";

export const Wrapper = styled.div`
position: absolute;
top: 0;
width: 100%;

.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${HeaderBird});
    background-position: center;
    background-repeat: no-repeat;
    color: white;
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
    padding-right: 0px;
    margin: 0px;
    font-size: 35px;
    font-weight: 900;
    font-family: BadScriptRegular;
    text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
}

.nav-bar {
    display: flex;
    flex-direction: row;
    padding-left: 0px;
}

.nav-bar a {
    padding: .5em;
    border-radius: 5px;
    color: white;
    border: solid 2px;
    background-color: rgba(0, 0, 0, .7);
}

.nav-bar a:hover {
    background-color: rgba(255, 255, 255, .3);
    border: solid 2px;
}

.link-item {
    margin: 0px 25px 0px 0px;
    text-decoration: none;
}
`;