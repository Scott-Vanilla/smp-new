import React from "react";

import './socials.scss'
import linkedinLogo from "../../assets/linkedin.png";
import gitLogo from "../../assets/git.png";
import instaLogo from "../../assets/insta.png";

export const Socials = () => {
  return (
    <div className="smp-socials">
      <div className="smp-socials__linkedin">
        <a href="https://www.linkedin.com/in/scottmacdev23/"><img src={linkedinLogo} alt="linkedin logo" width={50} height={50} /></a>
      </div>
      <div className="smp-socials__github">
      <a href='https://github.com/Scott-Vanilla'>  <img src={gitLogo} alt="github logo" width={50} height={50} /> </a>
      </div>
      <div className="smp-socials__instagram">
      <a href="https://www.instagram.com/scottmacdonalddev/">  <img src={instaLogo} alt="instagram logo" width={50} height={50} /> </a>
      </div>
    </div>
  );
};

export default Socials;
