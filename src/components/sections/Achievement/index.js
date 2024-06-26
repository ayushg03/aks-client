import "./achievement.scss"

//icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaLink,
  FaCss3Alt,
  FaAngleRight,
  FaHtml5,
  FaGit,
  FaFigma,
} from "react-icons/fa"
import { DiJavascript1, DiMysql } from "react-icons/di"
import { SiCsharp,SiLeetcode,SiCodeforces,SiCodechef } from "react-icons/si"
import { Link } from "react-router-dom"

const Achievement = () => {
  return (
    <>
      <div className="about-bg">
        <section id="achievement" className="about-section">
          <div className="grid1">
            <div className="left-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h2>
                  Achievements
                </h2>
              </div>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Won the Ist prize in Smart India Hackathon,2022 among 15k+ teams in a problem stated floated by Ministry of Information and Broadcasting, India.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
               <FaAngleRight/> Finalist of Smart India Hackathon,2023 for the problem statement floated by Indian Space Research Organization(ISRO).
              
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/>Designed various websites for my college administration and cafeteria.
              </p>
              
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <FaAngleRight/> Qualified IIT-JEE Advanced 2020, ranking in the top 1.8%.
              </p>
            </div>

          
            {/* end of grid div*/}
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Achievement
