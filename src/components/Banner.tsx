import React, { FC } from "react";

export interface BannerProps
{
    // Define your prop types here
}

export const Banner: FC<BannerProps> = (props) => 
{
    return (
        <div className="banner">
            <h1>Banner</h1>
        </div>
    );
}