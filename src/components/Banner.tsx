import React, { FC } from "react";
import model from "../assets/images/model.png";
import { Image } from "react-bootstrap";

export interface BannerProps {
  // Define your prop types here
}

export const Banner: FC<BannerProps> = (props) => {
  return (
    <div className="banner paddingright-xxxl">
      <div className="intro-section">
        <b className="intro-title">
          I'm Jaya Simha Reddy <span className="skill">Full Stack</span>{" "}
          Developer
        </b>
        <p className="intro-content">
          3 years experienced React Developer with hands-on experience in
          designing & implementing highly-responsive UI components by deploying
          React concepts. Proficient in translating designs & wireframes into
          high-quality code, and writing application interface code via ReactJS
          and Redux workflows.
        </p>
      </div>
      <Image
        src={model}
        alt="profile-pic"
        className=" paddingleft-xxxl"
        fluid
      />
    </div>
  );
};
