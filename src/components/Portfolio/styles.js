import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 200px;
  height: auto;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px;
  }

  .column {
    display: flex;
    flex-direction: column;
    column-gap: 0px;
  }

  .photo-wide {
    height: auto;
    width: 500px;
    margin: 5px;
  }

  .photo-tall {
    height: auto;
    width: 500px;
    margin: 5px;
  }

  .portfolio-intro {
    text-align: center;
    margin: 15px 15%;
    font-weight: bold;
  }

  .image-modal {
    position: fixed;
    top: 0;
    /* these arent needed*/
    left: 0;
    right: 0;
    bottom: 0;

    // but add these
    /*     
    height: 100vh;
    width: 100vw; 
    */
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 1000;
  }

  /* this style doesnt apply to anything and should be deleted */
  .close-button {
    display: flex;
    flex-direction: row-reverse;
    margin: 50px;
  }

  .modal-photo-wide {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // your image isnt transparent so you dont need this
    background-color: #fff;
    padding: 0px;
    /* ToDo dont need z-index on the photo because its on the modal wrapper */
    z-index: 1000;
    height: auto;
    width: 60vw;
    overflow: hidden;
  }

  .modal-photo-tall {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // your image isnt transparent so you dont need this
    background-color: #fff;
    padding: 0px;
    /* ToDo dont need z-index on the photo because its on the modal wrapper */
    z-index: 1000;
    height: 90vh;
    width: auto;
    overflow: hidden;
  }
`;
