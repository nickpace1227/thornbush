import React from 'react';
import images from "../Images";



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