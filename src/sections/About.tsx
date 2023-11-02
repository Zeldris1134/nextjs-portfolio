import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Greetings, I&apos;m James, a committed developer well-versed in web and mobile development. My proficiency spans both front-end and back-end technologies, allowing me to design engaging user interfaces and establish sturdy, scalable systems. I&apos;m passionate about crafting seamless user experiences while ensuring the reliability of the underlying infrastructure.
          </p>
          <p className="about-grid-info-text">
          I&apos;ve embarked on a tech journey marked by my unwavering commitment to continuous learning. In the ever-evolving tech landscape, I firmly believe in staying ahead of the curve. This dedication has led me to participate in industry events and engage in coding bootcamps, all aimed at expanding my knowledge and skill set.
          </p>
          <p className="about-grid-info-text">
          I&apos;m enthusiastic about taking on fresh challenges and providing creative solutions, and I'm eager for the opportunities that lie ahead in the dynamic world of technology.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">SCSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Figma</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/james.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
