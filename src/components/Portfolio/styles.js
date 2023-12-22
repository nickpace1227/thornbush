import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 200px;
  height: auto;
  
  .active-modal {
    max-height: 1440px;
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
    overflow: hidden;
  }

  .modal-photo-tall {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px;
    height: 90vh;
    width: auto;
    overflow: hidden;
  }
`;
