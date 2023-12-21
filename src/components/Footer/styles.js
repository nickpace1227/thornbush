import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 48px;
  margin-top: 50px;
  background-color: wheat;

  .footer-content {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .footer-words {
    margin: 15px;
  }

  .instagram-logo {
    display: flex;
    align-items: center;
    height: 30px;
    width: 30px;
  }

  .instagram-logo:hover {
    cursor: pointer;
  }
`;
