import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;

  .contact-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-explanation {
    width: 50%;
    max-width: 600px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .valid-input {
    margin: 10px;
    width: 250px;
    height: 30px;
    padding: 4px 12px 4px 12px;
    background: rgb(255, 255, 255, 0.7);
    border: solid 2px grey;
  }

  .invalid-input {
    margin: 10px;
    width: 250px;
    height: 30px;
    padding: 4px 12px 4px 12px;
    background: rgb(255, 255, 255, 0.7);
    border: solid 2px red;
  }

  .valid-message {
    margin: 10px;
    width: 250px;
    height: 150px;
    padding: 4px 12px 4px 12px;
    background: rgb(255, 255, 255, 0.7);
    border: solid 2px grey;
  }

  .invalid-message {
    margin: 10px;
    width: 250px;
    height: 150px;
    padding: 4px 12px 4px 12px;
    background: rgb(255, 255, 255, 0.7);
    border: solid 2px red;
  }

  .thank-you-message {
    width: 50%;
    max-width: 600px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    margin: 20px;
  }
`;
