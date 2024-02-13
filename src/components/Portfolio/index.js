import React, { useState } from "react";
import { Wrapper } from "./styles.js";
import ViewingModal from "../ViewingModal";

const photos1 = [
  {
    key: 1,
    src: "Limpkin",
    type: ".jpg",
    size: "photo-tall",
  },
  {
    key: 2,
    src: "ScrubJay",
    type: ".jpg",
    size: "photo-wide",
  },
  {
    key: 3,
    src: "FlockofBirds",
    type: ".jpg",
    size: "photo-wide",
  },
];

const photos2 = [
  {
    key: 4,
    src: "SoftshellTurtle",
    type: ".jpg",
    size: "photo-tall",
  },
  {
    key: 5,
    src: "EatingBird",
    type: ".jpg",
    size: "photo-wide",
  },
  {
    key: 8,
    src: "Crab",
    type: ".jpg",
    size: "photo-wide",
  },
];

const photos3 = [
  {
    key: 7,
    src: "SleepyBird",
    type: ".jpg",
    size: "photo-wide",
  },
  {
    key: 6,
    src: "GatorEye",
    type: ".jpg",
    size: "photo-tall",
  },
  {
    key: 9,
    src: "BeachBird",
    type: ".jpg",
    size: "photo-wide",
  },
];

export default function Portfolio() {
  const [modalState, setModalState] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalClassName, setModalClassName] = useState("");

  const openImageModal = (src, className) => {
    setModalImage(src);
    setModalClassName(className);
    setModalState(true);
  };

  const closeImageModal = () => {
    setModalState(false);
  };

  return (
    <Wrapper className={modalState ? "active-modal" : ""}>
      <div className="portfolio">
      <div className="row">
        {[photos1, photos2, photos3].map((photoArray) => {
          return (
            <div className="column">
              {photoArray.map((photo) => {
                return (
                  <div>
                  <img
                    key={photo.key}
                    className={photo.size}
                    alt={photo.src}
                    src={require(`../../assets/images/${photo.src}${photo.type}`)}
                    onClick={(event) =>
                      openImageModal(event.target.src, event.target.className)
                    }
                  />
                <div className="photo-id">{photo.key}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {modalState && (
        <ViewingModal
          alt={modalImage}
          src={modalImage}
          modalClassName={modalClassName}
          closeModal={() => closeImageModal()}
        />
      )}
      <div className="portfolio-intro">
        Thanks for checking out my portfolio. If you see something you like feel
        free to head over to the contact page, send me a message with the image
        ID of the image you want, and we can get a print squared away for you.
        Otherwise have a look around.
      </div>
      </div>
    </Wrapper>
  );
}
