import React from "react";
import img1 from "../img/html.png";
import img2 from "../img/css.png";
import img3 from "../img/js.png";
import img4 from "../img/react.png";
import img5 from "../img/Bootstrap.png";
import img6 from "../img/node.png";
import img7 from "../img/Java.png";
import img8 from "../img/mysql.png";

function S() {
  let feskill = [
    {
      image: img1,
      title: "HTML5",
    },
    {
      image: img2,
      title: "CSS3",
    },
    {
      image: img3,
      title: "JS",
    },
    {
      image: img4,
      title: "React",
    },
    {
      image: img5,
      title: "BootStrap5",
    },
  ];

  let beskill = [
    {
      image: img6,
      title: "Node",
    },
    {
      image: img7,
      title: "Java",
    },
    {
      image: img8,
      title: "MySQL",
    },
  ];

  return (
    <>
      <div className="skills" id="skill">
        <h1>SKILLS</h1>
        <div className="items">
          {/* <h6>Front-end Technologies</h6> */}
          {feskill.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={data.image} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}

          {/* <h6>Back-end Technologies</h6> */}
          {beskill.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={data.image} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default S;
