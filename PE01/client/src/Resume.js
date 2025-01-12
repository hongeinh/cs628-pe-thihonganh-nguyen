import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Anh Nguyen</h1>
        <p>Seattle, WA USA | (206)000-0000 | honganh3179@gmail.com</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, WA USA | June 2025</p>
          <p>GPA: 4.0/4.0</p>
          <h3>Bachelor of Science</h3>
          <p>Ha Noi University of Science and Technology | June 2023</p>
          <p>GPA: 3.42/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Website</h3>
          <p>
            Built a personal website using React and deployed it on GitHub Pages
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/hongeinh/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/hongeinh/MyResume
            </a>
          </p>

          <h3>Online Bookstore</h3>
          <p>
            Developed a web application for an online bookstore using Spring Boot and MySQL
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/hongeinh/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/hongeinh/online-bookstore
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;