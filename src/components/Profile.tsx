import React from "react";
import { Image } from "react-bootstrap";
import model from "../assets/images/model.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  CircleFill,
} from "react-bootstrap-icons";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="profile flex-column justify-content-center align-items-center">
      <div className="profile-pic marginbottom-xl margintop-xl">
        <Image src={model} alt="profile-pic" fluid />
        <span className="active-status">
          <CircleFill color="green" size={18} />
        </span>
      </div>
      <div className="name">Jaya Simha Reddy</div>
      <div className="role">Full Stack Developer</div>
      <div className="social-icons d-flex justify-content-between margin-lg">
        <span className="social-icon">
          <Facebook color="green" size={16} />
        </span>
        <span className="social-icon">
          <Instagram color="green" size={16} />
        </span>
        <span className="social-icon">
          <Linkedin color="green" size={16} />
        </span>
        <span className="social-icon">
          <Youtube color="green" size={16} />
        </span>
        <span className="social-icon">
          <Twitter color="green" size={16} />
        </span>
      </div>
    </div>
  );
};

export default Profile;
