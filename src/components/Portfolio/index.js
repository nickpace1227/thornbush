import React from 'react';
import images from "../Images";
import GatorEye from "../Images/GatorEye.jpg";

export default function Portfolio() {
    const portfolioImages = images;
    
    return (
        
        <div>
        
        {portfolioImages.map((image) => {
            return (
                <img src={image.src} />
            )
        })}
        </div>
    )
};