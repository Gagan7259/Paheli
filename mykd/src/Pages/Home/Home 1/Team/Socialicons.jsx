import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
function Socialicons() {
  return (
    <div>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaFacebook className="social-icon" />}
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<BsTwitterX className="social-icon" />}
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaInstagram className="social-icon" />}
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaSquarePinterest className="social-icon" />}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socialicons;
