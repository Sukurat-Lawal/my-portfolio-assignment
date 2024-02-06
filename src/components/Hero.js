import React from "react";
import heroImage from '../assets/heroImage.png'
export const Hero = () => {
  return (
    <section className="contained">
      <div className="content">
        <h1 className="name">Hi, I'm Sukrho</h1>
        <p className="description">
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="sukuratlawal6@gmail.com@email.com" className="contactBtn">
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt=" me"
        className="heroImg"
      />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};