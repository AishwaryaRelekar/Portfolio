import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
// import Skills from "./Skills";
import S from "./S";
import Project from "./Project";
import Aish from "../Aish.pdf";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Hello, I'm <span className="text-primary">Aishwarya Relekar</span>{" "}
          </h1>
          <h3 className={style.typingtxt}>
            I'm a<span></span>
          </h3>
          {/* <h3 data-aos="fade-left" data-aos-duration="2000">
            I'm a <span ref={typedRef} className="text-warning"></span>
          </h3> */}
          <p data-aos="fade-up" data-aos-duration="3000">
            I'm passionate about building user-friendly and responsove web
            application.I graduated in 2023 with CSE degree skilled in variours
            technologies like JavaScript,Node.js,React and more.
          </p>
          <div
            className="mx-auto mt-4"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            <a href={Aish} download className="btn btn-outline-primary fs-4">
              Download Resume
            </a>
          </div>
          <div
            className={style.icon}
            data-aos="flip-left"
            data-aos-duration="5000"
          >
            <a href="mailto:relekar.aishwarya@gmail.com" target="_blank">
              <i class="fa-regular fa-envelope"></i>
            </a>
            <a>
              <i class="fa-solid fa-phone"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aishwarya-relekar/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/AishwaryaRelekar" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <S />
      <Project />
      <Education />
      <Contact />
    </>
  );
}

export default Home;
