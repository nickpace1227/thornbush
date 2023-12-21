import React, {useState} from 'react';
import { Wrapper } from './styles.js';

const photos1 = [
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
    {   
        label: "IMG0003",
        src: "Limpkin",
        type: ".jpg",
        size: "photo-tall",
    },
]

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
        label: "IMG0006",
        src: "BeachBird",
        type: ".jpg",
        size: "photo-tall",
    }
]

const photos3 = [
    {
        label: "IMG0007",
        src: "SleepyBird",
        type: ".jpg",
        size: "photo-wide",
    },
    {
        label: "IMG0008",
        src: "Crab",
        type: ".jpg",
        size: "photo-wide",
    },
    {
        label: "IMG0009",
        src: "GatorEye" ,
        type: ".jpg",
        size: "photo-wide",
    }
];




export default function Portfolio() {
    const [modalState, setModalState] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [modalClassName, setModalClassName] = useState("");

    const toggleModalState = () => {
        setModalState(!modalState)
    }

    const toggleImageModal = (src, className) => {
        setModalImage(src);
        setModalClassName(className);
        toggleModalState();
    }

    if(modalState) {
        document.body.classList.add("active-modal")
    }

    if(!modalState) {
        document.body.classList.remove("active-modal")
    }

    return (
        <Wrapper>
        <div className="portfolio-intro">Thanks for checking out my portfolio. If you see something you like feel free to head over to the contact page, send me a message with the image ID of the image you want, and we can get a print squared away for you. Otherwise have a look around.</div>
       <div>
            <div className="row">
            <div className='column'>
                {photos1.map((photo) => {

                    return (
                            <img key={photo.label} className={photo.size} alt={photo.src} src={require(`../../assets/images/${photo.src}${photo.type}`)} onClick={(event) => toggleImageModal(event.target.src, event.target.className)}/>
                    )
                })}
            </div>
            <div className='column'>
                {photos2.map((photo) => {
                    return (
                            <img key={photo.label} className={photo.size} alt={photo.src} src={require(`../../assets/images/${photo.src}${photo.type}`)} onClick={(event) => toggleImageModal(event.target.src, event.target.className)}/>
                    )
                })}
            </div>
            <div className='column'>
                {photos3.map((photo) => {
                    return (
                            <img key={photo.label} className={photo.size} alt={photo.src} src={require(`../../assets/images/${photo.src}${photo.type}`)} onClick={(event) => toggleImageModal(event.target.src, event.target.className)}/>
                    )
                })}
            </div>
            </div>
        </div> 
        { modalState && 
            <div className="image-modal" onClick={toggleModalState}>
                <img src={modalImage} className={`modal-${modalClassName}`} onClick={toggleImageModal} />
            </div>}
        </Wrapper>
    )
};