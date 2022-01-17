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
        <div className="sidebar margin-xxxl">
            <SkillsList data={skillsData}/>
            <SkillsList data={languagesData}/>
        </div>
    );
}


{/* <SkillsList data={skillsData} title="Hello" />

({ data }) Object Destructuring

= {
    data,
    title
} */}