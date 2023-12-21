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
    /* ToDo this needs a max width  (my go to is 600px) */
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .input-field {
    margin: 10px;
    width: 250px;
    height: 30px;
    /* ToDo this needs some left padding and some Y-Padding so it doesnt feel cramped. I'd do 8 or 12px left and 4px Y */
    background: rgb(255, 255, 255, 0.7);
  }

  .contact-message {
    width: 350px;
    height: 150px;
    /* ToDo This needs padding on all sides */
    /* give this a border and then give the same border to input-field */
    /* make this field's width equal to the input fields above for consistency */
  }
`;
