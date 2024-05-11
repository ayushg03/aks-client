import "./projects.scss"

import ProjectItem from "./ProjectItem"
import { BsGithub } from "react-icons/bs"
import {RiShareBoxFill} from "react-icons/ri"

const Projects = () => {
  return (
    <>
      <div className="project-bg">
        {/* svg line curve */}
        <div className="curve1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>

        <section id="project" className="project-section">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2>
              My <span>Projects</span>
            </h2>
          </div>

          <div className="project-list-grid">
            <ProjectItem
              image={
                window.location.origin + "/assets/files/Proj1.jpg"
              }
              // no="#01"
              title="Gobite"
              description="Innovatively designed Gobite app, implemented modern reward system for college students, enhancing user
              engagement and satisfaction in the Internship at Bluevelvet Tech Pvt Ltd."
              technology={["Figma", "Wireframing", "Prototyping", "UX Research"]}
              live={
                <a href="https://medium.com/@aks0210teddy/gobite-rewards-7b8643304a08" title="Case Study">
                  <RiShareBoxFill />
                </a>
              }
              liveText="Case Study"
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/files/Proj2.jpg"
              }
              // no="#02"
              title="Grammatize"
              description="Crafted the entire design of a Grammer Correction Application, ensuring user-friendly navigation and intuitive error correction
              functionalities for seamless experiences."
              technology={["Figma", "Wireframing", "Prototyping", "UX Research"]}
              live={
                <a href="https://medium.com/@20cs3014/grammatize-6d834c8f43d8" title="Case Study">
                  <RiShareBoxFill />
                </a>
              }
              liveText="Case Study"
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/files/Proj3.jpg"
              }
              // no="#01"
              title="Other Projects"
              description="These are some of the projects from my early career done for learning and some as freelancer."
              technology={["Figma", "Wireframing", "Prototyping", "UX Research"]}
              live={
                <a href="https://dusty-fairy-f00.notion.site/Other-Projects-Figma-Links-dba98f9a4b4947f2b92627f13344cc09" title="View All">
                  <RiShareBoxFill />
                </a>
              }
              liveText="View All"
              delay={200}
            />
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve2">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Projects
