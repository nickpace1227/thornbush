import styled from "styled-components";
import CardStockBackground from "../../assets/images/CardStockBackground.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-image: url(${CardStockBackground});
  backdrop-filter: blur (2px);
  border-radius: 4px;


  .homepage-words {
    text-align: center;
    width: 800px;
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
    box-shadow: 10px 5px 5px black;
  }

  .carousel-button {
    position: absolute;
    z-index: 2;
    background: none;
    border: none;
    font-size: 50px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 1);
    height: 40px;
  }

  .carousel-button:hover {
    color: white;
    cursor: pointer;
  }

  .carousel-button.prev {
    left: -66px;
  }

  .carousel-button.next {
    right: -66px;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    text-align: center;
    width: 800px;
    backdrop-filter: blur(2px);
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 50px;
    }
`;
