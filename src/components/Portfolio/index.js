import React, { useState } from "react";
import { Wrapper } from "./styles.js";

const photos1 = [
  {
    label: "IMG0003",
    src: "Limpkin",
    type: ".jpg",
    size: "photo-tall",
  },
  {
    label: "IMG0001",
    src: "ScrubJay",
    type: ".jpg",
    size: "photo-wide",
  },
  {
    label: "IMG0002",
    src: "FlockofBirds",
    type: ".jpg",
    size: "photo-wide",
  },
];

const photos2 = [
  {
    label: "IMG0004",
    src: "PortraitScrub",
    type: ".jpg",
    size: "photo-tall",
  },
  {
    label: "IMG0005",
    src: "SoftshellTurtle",
    type: ".jpg",
    size: "photo-wide",
  },
  {
    label: "IMG0008",
    src: "Crab",
    type: ".jpg",
    size: "photo-wide",
  },
];

const photos3 = [
  {
    label: "IMG0007",
    src: "SleepyBird",
    type: ".jpg",
    size: "photo-wide",
  },
  {
    label: "IMG0006",
    src: "BeachBird",
    type: ".jpg",
    size: "photo-tall",
  },
  {
    label: "IMG0009",
    src: "GatorEye",
    type: ".jpg",
    size: "photo-wide",
  },
];

export default function Portfolio() {
  const [modalState, setModalState] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalClassName, setModalClassName] = useState("");

  const toggleImageModal = (src, className) => {
    setModalImage(src);
    setModalClassName(className);
    setModalState(!modalState);
  };

  // ToDo I like this. wont work for large Applications, but for something like this its a cool fix.
  // If I were doing this on a larger scale, I would do something below on Wrapper (see follow up comment)
  // if (modalState) {
  //   document.body.classList.add("active-modal");
  // }

  // if (!modalState) {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    // ToDo this is how you can do "conditional styling" based off the state of the wrapper. and then you just
    // set the max-height of the wrapper to be the height of the screen. This will make it so that the body
    // doesnt scroll when the modal is open.
    // <Wrapper className={modalState ? "active-modal" : ""}>
    <Wrapper className={modalState ? "active-modal" : ""}>
      <div className="portfolio-intro">
        Thanks for checking out my portfolio. If you see something you like feel
        free to head over to the contact page, send me a message with the image
        ID of the image you want, and we can get a print squared away for you.
        Otherwise have a look around.
      </div>
       <div className="row">
          {[photos1, photos2, photos3].map((photoArray) => {
            return (
              <div className="column">
                {photoArray.map((photo) => {
                  return (
                    <img
                      key={photo.label}
                      className={photo.size}
                      alt={photo.src}
                      src={require(`../../assets/images/${photo.src}${photo.type}`)}
                      onClick={(event) =>
                        toggleImageModal(
                          event.target.src,
                          event.target.className
                        )
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      {modalState && (
        <div className="image-modal" onClick={toggleImageModal}>
          <img
            alt={modalImage}
            src={modalImage}
            className={`modal-${modalClassName}`}
            onClick={toggleImageModal}
          />
        </div>
      )}
    </Wrapper>
  );
}
