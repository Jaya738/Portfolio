import React, { FC } from "react";

export interface MenuProps
{
    // Define your prop types here
}

export const Menu: FC<MenuProps> = (props) => 
{
    return (
        <div className="menu">
            <h1>Menu</h1>
        </div>
    );
}