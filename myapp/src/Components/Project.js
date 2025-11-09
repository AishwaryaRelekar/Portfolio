import React from "react";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/t1.jpg";
import p4 from "../img/pp.jpg";
import style from "./project.module.css";

function Project() {
  let project = [
    {
      key: 1,
      title: "Tourism Website",
      image: p3,
      description:
        "Built Tourism responsive website using front-end : [ HTML, CSS , JS ] ",

      demo: "http://www.example.com",
      source: "http://www.github.com",
    },
    {
      key: 2,
      title: "E-Commerce",
      image: p1,
      description:
        "Built a E-commerse website using front-end: [ HTML, CSS , JS, BootStrap, React] and Back-end: [ Node, Express , MySQL ] ",
      demo: "http://www.example.com",
      source: "http://www.github.com",
    },
    {
      key: 3,
      title: "To-Do-List",
      image: p4,
      description:
        " Built a Simple To-Do-List Application to keep a track of tasks as well as manage them using Front-end:  [ HTML, CSS , JS, BootStrap, React] and Back-end: [ Node, Express , MySQL ]",
      demo: "http://www.example.com",
      source: "http://www.github.com",
    },
    {
      key: 4,
      title: "React E-Commerce",
      image: p2,
      description:
        "A E-Commerce website built using Front-end:[ HTML, CSS, JS, BootStrap, React ]",
      demo: "http://www.example.com",
      source: "http://www.github.com",
    },
  ];
  return (
    <>
      {/* <div className="container project my-3" id="project">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div className="my-3 col-md-4 col-lg-3 mx-3 h-75" key={data.id}>
                <div
                  class="card bg-dark text-white"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  style={{ width: "18rem", border: "2px solid white" }}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.image}
                      class="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    ></img>
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.description}</p>

                    <a href={data.demo} class="btn btn-warning mx-3">
                      Demo
                    </a>
                    <a href={data.source} class="btn btn-primary">
                      code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div> */}
      <div className={style.cont2} id="project">
        <h1>PROJECTS</h1>
        <div className={style.container}>
          {project.map((data) => (
            <>
              <div
                className={style.card}
                key={data.id}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className={style.img}>
                  <img src={data.image}></img>
                </div>
                <div className={style.content}>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>

                  <div className="mt-3">
                    <a href={data.source} class="btn btn-primary ">
                      code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
