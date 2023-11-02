import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Zephyr PC",
      projectDescription:
        "This web application marks a key point in my web development journey, my first project during my Level 4 IT Essentials course. Developed using HTML, CSS, and JavaScript, the site lays the foundation for a new custom gaming PC company.",
      projectTech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/Zeldris1134/Zeldris1134.github.io/tree/main/ZephyrPC",
        externalLink: "https://zeldris1134.github.io/ZephyrPC/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Music Artist Website",
      projectDescription:
        "This project represented my initial foray into creating a responsive interface and a more comprehensive use of JavaScript. The concept was to develop a website for music artists or bands, featuring music files and a functional shopping cart.",
      projectTech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/Zeldris1134/Zeldris1134.github.io/tree/main/Band",
        externalLink: "https://zeldris1134.github.io/Band/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Playhouse Theatre",
      projectDescription:
        "The Playhouse Theatre, my final project in my first web class during my Diploma program, was a challenge to create a responsive web application. It involved the integration of HTML, CSS, JavaScript, and a React component. Notable features include modals and form control.",
      projectTech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/Zeldris1134/Zeldris1134.github.io/tree/main/Playhouse",
        externalLink: "https://zeldris1134.github.io/Playhouse/",
      },
    },
    {
      image: "/project4.png",
      projectName: "Ongaonga Bed & Breakfast",
      projectDescription:
        `In this project, we embarked on our initial journey of combining front-end and back-end elements within a single application. We utilized PHP and SQL to develop a fictitious bed and breakfast website. You can explore the test user account with these credentials: username - test@test.com | password - 12345678.`,
      projectTech: [
        "PHP",
        "CSS",
        "JavaScript",
        "SQL"
      ],
      projectExternalLinks: {
        github: "https://github.com/Zeldris1134/OngaongaB-B",
        externalLink: "http://ongaongabedandbreakfast.unaux.com/",
      },
    },
    {
      image: "/project5.png",
      projectName: "Technotes",
      projectDescription:
        "Technotes is a robust full stack application developed using the MERN stack. This project is centered around a company that transitioned from a sticky note solution to address recurring ticket losses. You can explore the test user account with these credentials: User - Demo | Password - 12345678. Please note that the backend connection may take a moment to establish.",
      projectTech: [
        "React",
        "CSS",
        "MongoDB",
        "Node.js",
        "Express"
      ],
      projectExternalLinks: {
        github: "https://github.com/Zeldris1134/technotes",
        externalLink: "https://technotes-2uxo.onrender.com/",
      },
    },
    {
      image: "/project6.png",
      projectName: "Job Search Application",
      projectDescription:
        "This project is a mobile application built using React Native and supplemented with JavaScript. The application serves as a career portal, enabling users to search for jobs based on a range of criteria. Job listings have been seamlessly integrated using the JSearch API from RapidAPI.",
      projectTech: [
        "React Native",
        "Rapid API",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/Zeldris1134/react_native_jobs",
        externalLink: "https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
