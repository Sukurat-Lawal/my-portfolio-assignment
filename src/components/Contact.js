import React from "react";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
    export const Contact = () => {
        return (
          <footer id="contact" className="con">
            <div className="text">
              <h2>Contact</h2>
              <p>Feel free to reach out!</p>
            </div>
            <ul className="links">
              <li className="link">
                <img src={email} alt="Email" className="" />
                <a href="Sukuratlawal6@gmail.com">Sukuratlawal6@gmail.com</a>
              </li>
              <li className="link">
                <img
                  src={linkedin}
                  alt="Linked"
                />
                <a href="Sukurat Abosede">Sukurat Abosede</a>
              </li>
              <li className="link">
                <img src={github} alt="Git"
                />
                <a href="Lawal Sukurat">Lawal sukurat</a>
              </li>
            </ul>
          </footer>
        );
      };