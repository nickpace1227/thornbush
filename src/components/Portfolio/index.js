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
    }
];


export default function Portfolio() {
    return (
        <Wrapper>
        {photos.map((photo) => {
            return (
                <div key={photo.label}>
                <p>{photo.label}</p>
                <img className="portfolio-photo" alt={photo.src} src={require(`../../assets/images/${photo.src}${photo.type}`)} />
                </div>
            )
        })}
        </Wrapper>
    )
};