import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";
import { FaFacebook } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div id="socials-container">
      <i
        className="fab fa-facebook icon"
        onClick={() =>
          window.open("https://www.facebook.com/next.saimon", "_blank")
        }
      >
        <BsFacebook />
      </i>
      <i
        className="fab fa-instagram icon"
        onClick={() =>
          window.open("https://www.instagram.com/next.saimon/", "_blank")
        }
      >
        <AiOutlineInstagram />
      </i>
      <i
        className="fab fa-github icon"
        onClick={() => window.open("https://github.com/nextSaimon", "_blank")}
      >
        <BsGithub />
      </i>
    </div>
  );
};

export default SocialIcons;
