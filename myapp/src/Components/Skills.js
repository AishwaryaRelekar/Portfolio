import React from "react";
import Style from "./skill.module.css";

function Skills() {
  return (
    <>
      <div className={Style.container}>
        <h1>SKILLS</h1>
        <div className={Style.row}>
          <div className={Style.skill}>
            <div className={Style.row1}>
              <div className={Style.box1}>
                <div className={Style.icon}>
                  <img></img>
                </div>
                <h1> Front-end Technologies</h1>
              </div>
              <div className={Style.box2}>
                <div className={Style.icon}>
                  <img></img>
                </div>
                <h1>Back-End Technologies</h1>
              </div>
            </div>
            <div className={Style.row1}>
              <div className={Style.box3}>
                <div className={Style.icon}>
                  <img></img>
                </div>
                <h1>Database Management</h1>
              </div>
              <div className={Style.box4}>
                <div className={Style.icon}>
                  <img></img>
                </div>
                <h1>Other Skills</h1>
              </div>
            </div>
          </div>
          <div className={Style.skilldesc}>
            <div className={Style.FE}>
              <h1>HTML</h1>
              <h1>CSS</h1>
              <h1>JS</h1>
              <h1>BootStrap5</h1>
              <h1>ReactJs</h1>
            </div>
            <div className={Style.BE}>
              <h1>NodeJS</h1>
              <h1>ExpressJS</h1>
              <h1>Java</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
