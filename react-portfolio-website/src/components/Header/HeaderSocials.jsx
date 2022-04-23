import React from "react";
import { BsLinkedin, BsGithub, BsDribbble} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" className=""><BsLinkedin/></a>
      <a href="https://github.com" target="_blank" className=""><BsGithub/></a>
      <a href="https://dribble.com" target="_blank" className=""><BsDribbble/></a>
    </div>
  );
};

export default HeaderSocials;
