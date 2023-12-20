import styled from 'styled-components';
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
    font-size: 4rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, .5)
    background-color: rgba(0, 0, 0, .1);
}

.carousel-button:hover {
    color: white;
    cursor: pointer;
}

.carousel-button.prev {
    left: 1rem;
}

.carousel-button.next {
    right: 1rem;
}
`