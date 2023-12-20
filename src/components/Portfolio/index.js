import React, {useState} from 'react';
import { Wrapper } from './styles.js';


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
        src: "GatorEye" ,
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
    {
        label: "IMG0006",
        src: "BeachBird",
        type: ".jpg",
    },
    {
        label: "IMG0007",
        src: "SleepyBird",
        type: ".jpg",
    }
];




export default function Portfolio() {
    const [modalState, setModalState] = useState(false);

    const toggleImageModal = () => {
    setModalState(!modalState);
    
    }

    return (
        <Wrapper>
        <div className="portfolio-intro">Thanks for checking out my portfolio. If you see something you like feel free to head over to the contact page, send me a message with the image ID of the image you want, and we can get a print squared away for you. Otherwise have a look around.</div>
        <div>
            <div className="row">
            <div className='new-col-1'>
                <spans>
                    <img src={require(`../../assets/images/ScrubJay.jpg`)} className="portfolio-photo" />
                </spans>
                <spans>
                    <img src={require(`../../assets/images/FlockofBirds.jpg`)} className="portfolio-photo" />
                </spans>
                <spans>
                    <img src={require(`../../assets/images/GatorEye.jpg`)} className="portfolio-photo" />
                </spans>
            </div>
            <div className='new-col-1'>
                <spans>
                <img src={require(`../../assets/images/Crab.jpg`)} className="portfolio-photo" />
                </spans>
                <spans>
                    <img src={require(`../../assets/images/SoftshellTurtle.jpg`)} className="portfolio-photo" />
                </spans>
                <spans>
                    <img src={require(`../../assets/images/BeachBird.jpg`)} className="portfolio-photo" />
                </spans>
            </div>
            <div className='new-col-1'>
                <spans>
                    <img src={require(`../../assets/images/SleepyBird.jpg`)} className="portfolio-photo" />
                </spans>
                <spans>pic 2</spans>
                <spans>pic 3</spans>
            </div>
            </div>
           
    
        {/* {!modalState ? photos.map((photo) => {
            return (
                <div key={photo.label}>
                <p>{photo.label}</p>
                <img className="portfolio-photo" alt={photo.src} src={require(`../../assets/images/${photo.src}${photo.type}`)} onClick={toggleImageModal} />
                </div>
            )
        }) : <img className="portfolio-photo" src={require(`../../assets/images/Crab.jpg`)} onClick={toggleImageModal} alt="Crab.jpg" />} */}
        </div>
        </Wrapper>
    )
};