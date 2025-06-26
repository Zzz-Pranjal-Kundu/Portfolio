import React from 'react';
import { FaWind, FaGithub, FaFlask, FaGitlab, FaDocker, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMongodb, SiMysql, SiSqlite, SiSpringboot, SiAndroidstudio, SiPostman, SiVisualstudio, SiCisco, SiGeeksforgeeks, SiLeetcode, SiKotlin, SiTypescript, SiScikitlearn } from 'react-icons/si';
import './techstack.scss';

const Techstack: React.FC = () => {
  return (
    <div className="about-technologies-container">
      <section className="about-technologies">
        <h2>My Techstack</h2>
        <div className="technology-categories">
          <div className="technology-category">
            <h3>Languages</h3>
            <div className="technology-items">
              <div className="technology-item"><SiC /><p>C</p></div>
              <div className="technology-item"><FaJava /><p>Java</p></div>
              <div className="technology-item"><SiCplusplus /><p>C++</p></div>
              <div className="technology-item"><FaPython /><p>Python</p></div>
              <div className="technology-item"><FaDatabase /><p>SQL</p></div>
              <div className="technology-item"><SiMysql /><p>MySQL</p></div>
              <div className="technology-item"><SiSqlite /><p>SQLite</p></div>
              <div className="technology-item"><FaJs /><p>JavaScript</p></div>
              <div className="technology-item"><SiTypescript /><p>TypeScript</p></div>
              <div className="technology-item"><SiKotlin /><p>Flutter</p></div>
              <div className="technology-item"><FaHtml5 /><p>HTML</p></div>
              <div className="technology-item"><FaCss3 /><p>CSS</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Frameworks & Libraries</h3>
            <div className="technology-items">
              <div className="technology-item"><FaWind /><p>Tailwind CSS</p></div>
              <div className="technology-item"><FaFlask /><p>Flask</p></div>
              <div className="technology-item"><SiSpringboot /><p>SpringBoot</p></div>
              <div className="technology-item"><FaNodeJs /><p>NodeJS</p></div>
              <div className="technology-item"><SiPostman /><p>Postman</p></div>
              <div className="technology-item"><SiScikitlearn /><p>SCSS</p></div>
              <div className="technology-item"><FaReact /><p>React</p></div>
              <div className="technology-item"><FaPython /><p>PyGame</p></div>
              <div className="technology-item"><SiMongodb /><p>MongoDB</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Developer Tools</h3>
            <div className="technology-items">
              <div className="technology-item"><FaGithub /><p>GitHub</p></div>
              <div className="technology-item"><FaGitlab /><p>GitLab</p></div>
              <div className="technology-item"><FaDocker /><p>Docker</p></div>
              <div className="technology-item"><SiAndroidstudio /><p>Android Studio</p></div>
              <div className="technology-item"><SiCisco /><p>Cisco</p></div>
              <div className="technology-item"><SiVisualstudio /><p>Visual Studio</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>DSA & DEVELOPMENT</h3>
            <div className="technology-items">
              <div className="technology-item"><SiLeetcode /><p>Leetcode</p></div>
              <div className="technology-item"><SiGeeksforgeeks /><p>GeeksForGeeks</p></div>
              <div className="technology-item"><FaGithub /><p>GitHub</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Techstack;
