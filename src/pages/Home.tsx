import React, { FC } from "react";
import { Button } from "react-bootstrap";

export interface HomeProps
{
    // Define your prop types here
}

export const Home: FC<HomeProps> = (props) => 
{
    return (
        <div className="home-page">
            <h1>This is Home Page</h1>
            <div>
                <Button>Testing Bootstrap</Button>
            </div>
        </div>
    );
}