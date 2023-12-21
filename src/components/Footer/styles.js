import styled from "styled-components";

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
    /* ToDo this is too tall. I'd cap footer height at 48px*/
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
    /* ToDo make this logo smaller */
    height: 50px;
    /* I think you meant width here? */
    weight: 50px;
  }

  .instagram-logo:hover {
    cursor: pointer;
  }
`;
