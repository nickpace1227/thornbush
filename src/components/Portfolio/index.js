import React from 'react';
import { Wrapper } from './styles.js';


const photos = [
    {
        label: "img0001",
        src: "ScrubJay",
        type: ".jpg",
    },
    {
        label: "img0002",
        src: "FlockofBirds",
        type: ".jpg",
    },
    {
        label: "img0003",
        src: "GatorEye" ,
        type: ".jpg",
    },
    {
        label: "img0004",
        src: "Crab",
        type: ".jpg",
    },
    {
        label: "img0005",
        src: "SoftshellTurtle",
        type: ".jpg",
    }
];


export default function Portfolio() {
    return (
        <Wrapper>
        <div className="portfolio">
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