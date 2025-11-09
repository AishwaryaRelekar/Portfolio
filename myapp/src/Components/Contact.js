import React from "react";
import style from "./contact.module.css";

function Contact() {
  const formHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={style.container} id="contact">
        <h1>GET IN TOUCH</h1>
        <p
          className="fs-4 mt-3 mb-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Lets' Connect! If you have any questions, project to discuss or just
          want to connect,feel free to drop me a message.
        </p>

        <div
          className={style.form}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <form onSubmit={formHandle}>
            <div className=" mb-3 ">
              <input
                className={style.t}
                type="text"
                placeholder="Enter your Name"
              ></input>
            </div>
            <div className="mb-3">
              <input
                className={style.t}
                type="email"
                placeholder="Enter you Email"
              ></input>
            </div>
            <textarea
              className={style.t}
              typeof="text"
              rows="5"
              cols="5"
              placeholder="Message"
            ></textarea>
            <div className={style.btn}>
              <button>Send Message</button>
            </div>
          </form>
        </div>
        {/* <div className={style.icon}>
            <h4>Alternatively, You can reach me out at </h4>
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
            <h5>I Usually respond between 24-48hours.</h5>
            <h5>I look forward to to hear from you.</h5>
          </div> */}
      </div>
    </>
  );
}

export default Contact;
