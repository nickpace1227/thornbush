import React from 'react';
import {Wrapper} from './styles.js';

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
];

export default function HomePage() {
    return (
    <Wrapper>
            <h1>Welcome to Thornbush Photography</h1>
            <div className="homepage-words">I'm an amateur photographer with a focus on wildlife and sometimes landscape. Take a look around and if you have any questions feel free to drop me a line.</div>

        
    </Wrapper>
    )
};