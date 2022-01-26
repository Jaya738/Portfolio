import React, { FC } from "react";
import model from '../assets/images/model.png';

export interface BannerProps
{
    // Define your prop types here
}

export const Banner: FC<BannerProps> = (props) => 
{
    return (
        <div className="banner page-container">
            <b>
                <h1>I'm Jaya Simha Reddy</h1>
                <h1><span className="skill">Front-end</span> Developer</h1>
            </b>
            <img src={model} alt="profile-pic" />
        </div>
    );
}