import React, { FC } from "react";

export interface SidebarProps
{
    // Define your prop types here
}

export const Sidebar: FC<SidebarProps> = (props) => 
{
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
        </div>
    );
}