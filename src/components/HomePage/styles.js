import styled from "styled-components";
import CardStockBackground from "../../assets/images/CardStockBackground.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-image: url(${CardStockBackground});

  .homepage-words {
    text-align: center;
    width: 50%;
    /* ToDo need a max-width here */
    font-weight: bold;
  }

  .portfolio-link {
    text-decoration: none;
  }

  .carousel {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    margin: 50px 0px 50px 0px;
  }

  .carousel-photo {
    width: 700px;
    height: auto;
  }

  .carousel-button {
    position: absolute;
    z-index: 2;
    background: none;
    border: none;
    /* ToDo I dont like the use of rem typically. MOST organizations prefer the use of pixels  */
    /* this is because rem is based off the size of the root element, which can be changed dynamically. 
    so this is a "unknown" value */
    font-size: 4rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .carousel-button:hover {
    color: white;
    cursor: pointer;
  }
  /* ToDo same here */
  .carousel-button.prev {
    left: 1rem;
  }
  /* ToDo same here */
  .carousel-button.next {
    right: 1rem;
  }
`;
