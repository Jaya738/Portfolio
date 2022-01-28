import React, { FC } from "react";
import { languagesData, skillsData } from "../interfaces/skills";
import SkillsList from "./SkillsList";

export interface SidebarProps
{
    // Define your prop types here
}

export const Sidebar: FC<SidebarProps> = (props) => 
{
    return (
        <div className="sidebar sticky-sidebar">
            <SkillsList data={skillsData}/>
            <hr />
            <SkillsList data={languagesData}/>
        </div>
    );
}