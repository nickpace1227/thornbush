import React from 'react';
import images from "../Images/index.js";

export default function Portfolio() {
    return (
        images.map((image) => {
            return (
                <div>
                <img src={image.url} />
                </div>
            )
        })
    )
};