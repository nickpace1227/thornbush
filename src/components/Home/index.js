import React, { useState } from "react";
import { Wrapper } from "./styles.js";
import { Link } from "react-router-dom";

const photos = [
  {
    label: "IMG0001",
    src: "ScrubJay",
    type: ".jpg",
  },
  {
    label: "IMG0002",
    src: "FlockofBirds",
    type: ".jpg",
  },
  {
    label: "IMG0003",
    src: "GatorEye",
    type: ".jpg",
  },
  {
    label: "IMG0004",
    src: "Crab",
    type: ".jpg",
  },
  {
    label: "IMG0005",
    src: "SoftshellTurtle",
    type: ".jpg",
  },
];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
    if (imageIndex === 4) {
      setImageIndex(0);
    }
    if (imageIndex < 4) {
      setImageIndex(imageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (imageIndex <= 0) {
      setImageIndex(photos.length - 1);
    }
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <Wrapper>
      <h1>Welcome to Thornbush Photography</h1>
      <div className="homepage-words">
        I'm an amateur photographer with a focus on wildlife and sometimes
        landscape. Take a look around and if you have any questions feel free to
        drop me a line. If you like what you see, head over to my{" "}
        <Link to="/portfolio" className="portfolio-link">
          portfolio
        </Link>{" "}
        page and see these and more.
      </div>
      <section>
        <div className="carousel">
          <button className="carousel-button prev" onClick={handlePrev}>
            &#10603;
          </button>
          <button className="carousel-button next" onClick={handleNext}>
            &#10604;
          </button>
          <img
            className="carousel-photo"
            src={require(`../../assets/images/${photos[imageIndex].src}${photos[imageIndex].type}`)}
            alt={photos[imageIndex].src}
            data-active
          />
        </div>
      </section>
    </Wrapper>
  );
}
