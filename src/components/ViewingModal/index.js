import React from "react";

export default function ViewingModal(props) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <div className="image-modal" onClick={closeModal}>
      <img
        alt={props.alt}
        src={props.src}
        className={`modal-${props.modalClassName}`}
        onClick={closeModal}
      />
    </div>
  );
}
