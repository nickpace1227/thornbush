import React from 'react';
import { Wrapper } from './styles.js';
import {images} from "../Images";
import ScrubJay from "../Images/ScrubJay.jpg";



export default function Portfolio() {

    return (
        <Wrapper>
        <div>
            <img class="portfolio-photo" src={ScrubJay} />

        {images.map((image) => {
            return (
                <div>
                <p>{image.id}</p>
                <img src={image} />
                </div>
            )
        })}
        </div>
        </Wrapper>
    )
};