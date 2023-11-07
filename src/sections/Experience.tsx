import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Whitecliffe",
      role: "Bachelor of Applied Information Technology",
      url: "https://www.whitecliffe.ac.nz/technology/bachelor-in-applied-information-technology-bappit-l7",
      start: "July 2023",
      end: "Present",
      shortDescription: [
        "Comprehensive Software Development - Learn C# development with Windows Forms and .NET, covering object-oriented programming, problem-solving, and advanced techniques for real-world applications.",
        "Web Development and Interaction Design - Develop web-based applications with a focus on interaction design, including user research, information architecture, interface design, and prototyping.",
        "Data-Driven Web Development - Design and develop data-driven websites, emphasizing web architectures, scripting languages, database interaction, and information security."
      ],
    },
    {
      name: "Yoobee",
      role: "Level 5 UX Design Micro-credential",
      url: "https://www.yoobee.ac.nz/short-course/ux-design-micro-credential",
      start: "August 2023",
      end: "October 2023",
      shortDescription: [
        "UX Design: Core Concepts - Learn about the history, goals, role, and essential principles of user-centered design in UX.",
        "Design - Master the design process by applying visual principles, generating innovative ideas, creating user-friendly interfaces, and implementing effective navigation patterns.",
        "Research - Gather insights by aligning business goals with user needs, conducting thorough research, crafting user personas, and organizing information effectively. ",
        "Testing - Evaluate designs through user-focused testing, refining iteratively, guiding test sessions, and extracting valuable insights from collected data."
      ],
    },
    {
      name: "Whitecliffe",
      role: "Level 6 Diploma in Software Development",
      url: "https://www.whitecliffe.ac.nz/technology/diploma-software-development-l6",
      start: "February 2022",
      end: "July 2023",
      shortDescription: [
        "Software Development: Proficient in HTML/CSS, JavaScript, C#, Java, React Native, and mobile app development (Figma and Xamarin Forms).",
        "System Design: Experienced in gathering client requirements, designing and developing secure web applications, and implementing various data structures and algorithms.",
        "Testing and Maintenance: Proficient in testing and maintaining diverse software applications.",
        "Agile Project Management: Well-versed in project planning and management using Agile software development methodologies.",
      ],
    },
    {
      name: "Whitecliffe",
      role: "Level 5 Certificate in Information Technology",
      url: "https://www.whitecliffe.ac.nz/technology/certificate-in-information-technology-l5",
      start: "July 2021",
      end: "December 2021",
      shortDescription: [
        "IT Systems (Installation of Linux and Windows OS, Basic Networking/Subnetting).",
        "Professional Practice (Covered basics on principles to follow within IT Industry).",
        "Data Handling & Web Concepts (Microsoft SQL database, HTML, CSS, and Java Script).",
        "Programming Principles (Python Fundamentals, OOP C# coding)."
      ],
    },
    {
      name: "Whitecliffe",
      role: "Level 4 Certificate in IT Essentials",
      url: "https://www.whitecliffe.ac.nz/technology/certificate-in-it-essentials-l4",
      start: "February 2021",
      end: "July 2021",
      shortDescription: [
        "IT Fundamentals (Assembling and Disassembly computers, Fault Finding computers, setting up a simple network devices).",
        "Information Management (Design/Creating relational databases using Microsoft Access).",
        "Web Design (Using HTML, CSS & JavaScript to develop simple websites).",
        "Software Development (Fundamentals of coding (Functions, Variables and Boolean Expressions), Creating GUI interface programs in python).",
      ],
    }, 
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Recent Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.role}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} target="_blank" className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
