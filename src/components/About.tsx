import React from "react";
import Accordion from "./Accordion";
import "../styles/about.scss";

const accordionData = [
  {
    title: "Previous experience",
    content: [
      "I actively searched for contractors and materials.",
      "I analyzed cost data in search of optimization.",
      "I cope well with pressure and a variety of tasks.",
      "I negotiated terms and conditions of high-value commercial contracts.",
      "I am looking for improvements, optimizations and possibilities of their implementation in the workplace. Two successful experiences.",
      "I have experience in working with consumers.",
      "I know the principles of human resources activities in the company.",
      "I know the formal and legal activities of running a business.",
    ],
  },
  {
    title: "Career goals",
    content: ["Career goals"],
  },
  {
    title: "Know me better",
    content: [
      "I am an empathetic and cheerful person who works well in teamwork.",
      "I am determined to achieve my goal, every problem has a solution.",
      "I am a dreamer who likes to set the bar high, because we will not reach high without sufficiently high goals.",
      "I have the ability to understand complex things and communicate them to others in a simple way.",
      "I am a person who is not afraid of challenges and is not afraid to take responsibility for the entrusted tasks.",
    ],
  },
];

const About: React.FC = () => {
  return (
    <div className="about">
      <h2 className="about__title">About Me</h2>

      <div className="about__description">
        <p>
          As a passionate web developer, I find joy in transforming ordinary
          lines of code into functional applications. Constant learning drives
          my engagement, and continuous growth is my guiding principle.
          Committed to evolving my skills, to be able create superior, efficient
          applications with clean and elegant code.
        </p>
        <p>
          I'm actively seeking opportunities to contribute my skills and passion
          to innovative projects, aiming to collaborate on building
          extraordinary applications that seamlessly blend technology with
          creativity and functionality.
        </p>
      </div>
      {accordionData.map((item) => (
        <Accordion title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default About;
