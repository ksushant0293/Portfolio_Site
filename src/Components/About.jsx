
import React from "react";
import Header from "./Header"
import image from "../assets/motion-background.jpg";
const imageAltText = "purple and blue abstract background";
const description =
  "I'm Sushant Kumar, a dedicated front-end web developer passionate about creating seamless and visually stunning user experiences.";

const skillsList = [
  "HTML/CSS",
  "JavaScript",
  "Version Control",
  "Cross-Browser Compatibility",
  "Performance Optimization",
  "Responsive Design",
  "UX/UI Design",
];

const detailOrQuote =
  "I am passionate about solving problems in innovative ways to drive progress in front-end development. By leveraging my technical skills and knowledge of modern web technologies, I strive to find new and effective methods to make technology accessible to everyone.";

const About = () => {
  return (
    <>
    <Header/>
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
    </>
  );
};

export default About;
