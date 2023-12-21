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

export default function HomePage() {
  const [imageIndex, setImageIndex] = useState(0);

  // ToDo carousels should wrap around, add logic that when you hit the max index it loops to the first image
  const handleNext = () => {
    if (imageIndex === 4) {
      return;
    }
    if (imageIndex < 4) {
      setImageIndex(imageIndex + 1);
    }
  };

  // ToDo same here but when you hit 0 loop to the max index
  const handlePrev = () => {
    if (imageIndex <= 0) {
      return;
    }
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <Wrapper>
      <h1>Welcome to Thornbush Photography</h1>
      {/* ToDo I'd consider adding the same blur or bg-type effect that I did on your about page. this text is difficult to read */}
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
          {/* // ToDo change the color of the buttons when they aren't being hovered to something with a bit more contrast 
          OR slide the buttons OUTSIDE the image (ie to the left and right of the carousel) */}
          <button className="carousel-button prev" onClick={handlePrev}>
            &#10603;
          </button>
          <button className="carousel-button next" onClick={handleNext}>
            &#10604;
          </button>
          {/* // ToDo I think you need box-shadow on this image, or a border. the edges get lost with your BG */}
          <img
            className="carousel-photo"
            src={require(`../../assets/images/${photos[imageIndex].src}${photos[imageIndex].type}`)}
            alt={photos[imageIndex].src}
            data-active
          />
          {/* // ToDo remove these comments */}
          {/* <li className="slide" data-active>
                            <img src={ScrubJay} alt="ScrubJay"  />
                        </li>
                        <li className="slide">
                            <img src={FlockofBirds} alt="FlockofBirds"  />
                        </li>
                        <li className="slide">
                            <img src={GatorEye} alt="GatorEye"  />
                        </li>
                        <li className="slide">
                            <img src={Crab} alt="Crab" />
                        </li>
                        <li className="slide">
                            <img src={SoftshellTurtle} alt="SoftshellTurtle" />
                        </li> */}
        </div>
      </section>
    </Wrapper>
  );
}
