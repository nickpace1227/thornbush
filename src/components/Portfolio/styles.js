import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 200px;

  .active-modal {
    max-height: 50px;
  }

  .portfolio {
    margin-top: 48px;
  }

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
    margin: 8px;
    box-shadow: 10px 5px 5px black;
  }

  .photo-tall {
    height: auto;
    width: 500px;
    margin: 8px;
    box-shadow: 10px 5px 5px black;
  }

  .photo-id {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z: 100;
    bottom: 56px;
    left: 32px;
    width: 32px;
    height: 32px;
    color: white;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 4px;
  }

  .portfolio-intro {
    text-align: center;
    margin: 15px 15%;
    font-weight: bold;
  }

  .image-modal {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .modal-photo-wide {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px;
    height: auto;
    width: 60vw;
  }

  .modal-photo-tall {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px;
    height: 90vh;
    width: auto;
  }
`;
