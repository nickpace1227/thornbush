import React from 'react';
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
    return (
        <Wrapper>
        <div className="small-screen medium-screen large-screen">
        {photos.map((photo) => {
            return (
                <div key={photo.label}>
                <p>{photo.label}</p>
                <img className="portfolio-photo" alt={photo.src} src={require(`../../assets/images/${photo.src}${photo.type}`)} />
                </div>
            )
        })}
        </div>
        </Wrapper>
    )
};