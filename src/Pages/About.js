import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <div align="center" className="about">
      <div className="about-info">
        <img
          src="https://avatars.githubusercontent.com/u/105737474?v=4"
          alt="dev-img"
        />
        <h1>Salina Malek</h1>
        <h3>
          I am a Full Stack Web Development Student at Pursuit, a Google-funded
          12-month intensive coding program that provides experience with
          JavaScript, CSS, HTML, Node, and React. I aspire to be a software
          engineer that positively impacts the world.
        </h3>
        <h3>
          This is my fullstack portfolio project. The purpose of this app is to
          function as a bucket list. Write down all your heart desires and mark
          them complete when you accomplish your wishes!{" "}
        </h3>
        <div className="socials">
          <h4>Get In Touch With Me:</h4>
          <a href="https://github.com/Salinamalek" target="_blank">
            <BsGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/salina-malek-a36238243/"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </a>
          <a href="mailto:salinamalek@pursuit.org" target="_blank">
            <MdEmail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
