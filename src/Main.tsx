import React, { FC } from "react";
import { Hello } from "./components/Hello";
import { Home } from "./pages/Home";

export const Main: FC = () => 
{
    return (
        <>
            <Home />
            <Hello message="Build your portfolio with">
                <div className="features">
                    <div>Skills</div>
                    <div>Experience</div>
                    <div>Education</div>
                </div>
            </Hello>
        </>
        
    );
}