import "./App.css";
import { Link } from "react-scroll";
import { FaHome,FaBook,FaPaperPlane,FaJava,FaReact,FaNodeJs,FaGithub,FaFigma,FaInstagram } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import {RiJavascriptLine,RiNextjsLine,RiFolderDownloadLine,} from "react-icons/ri";
import { PiFileHtml, PiFileCssBold } from "react-icons/pi";
import { BiLogoSpringBoot, BiLogoMongodb } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { useState,} from "react";
import portfolioImage from "./assets/IMG_1121.jpg";
import EmailForm from "./components/EmailForm";
import useTypewriterWithErase from "./components/useTypewriterWithErase";
import useTypewriter from "./components/useTypewriter";

const PDF_FILE_URL = "/Wille%20cv%20-%202025.pdf";

function App() {
  const menuItems = [
    { id: 1, title: "home", icon: <FaHome /> },
    { id: 2, title: "portfolio", icon: <FaBook /> },
    { id: 3, title: "contact", icon: <FaPaperPlane /> },
  ];

  const typedOutput = useTypewriter([
    "Hi, my name is Wille",
    "I'm a Software Developer",
    "See my experience"
  ], 70, 200);

   const portfolioTypedText = useTypewriterWithErase(
    ["Frontend", "Backend", "Fullstack"],
    200, 
    1000 
  );

  const [activeList, setActiveList] = useState("languages");

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = PDF_FILE_URL;
    link.download = "WilleCv-2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={menu.title === "home" ? -80 : menu.title === "contact" ? 100 : 0} 
                  duration={500}
                >
                  {menu.icon} {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="content home-section">
        {typedOutput && (
    <div className="home-content">
    <h1>{typedOutput.split("\n")[0]}</h1>
    {typedOutput.split("\n")[1] && <p>{typedOutput.split("\n")[1]}</p>}
    {typedOutput.split("\n")[2] && (
      <Link to="portfolio" smooth={true} offset={-80} duration={500}>
        <button className="home-button">{typedOutput.split("\n")[2]}</button>
      </Link>
    )}
    </div>
)}

        </section>

        <section id="portfolio" className="content portfolio-section">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <img
                className="portfolio-image"
                src={portfolioImage}
                alt="portfolio"
              />
            </div>
            <div className="portfolio-textbox">
              <h2 className="portfolio-headline">
                <span className="typed-text">{portfolioTypedText}&nbsp;</span>
              </h2>
              <p>
                I am a passionate <span className="portfolio-text-highlight">Junior Software Developer</span> eager to start my professional journey in tech. 
                With a strong foundation in <span className="portfolio-text-highlight"> React </span>, <span className="portfolio-text-highlight">Node.js </span>, and 
                <span className="portfolio-text-highlight"> Web development, </span>
                I enjoy building clean, efficient, and <span className="portfolio-text-highlight">user-friendly solutions</span>. 
                I'm constantly learning and growing, driven by a love for <span className="portfolio-text-highlight">problem-solving</span> and 
                <span className="portfolio-text-highlight"> innovation</span>. 
                 I'm excited to contribute to impactful projects and collaborate with others to create technology that makes a difference.
              </p>
            </div>

            <div className="cv-button-container">
              <button className="cv-icon-button" onClick={downloadCV}>
                <RiFolderDownloadLine className="cv-icon" />
                <span className="cv-icon-text">Download CV</span>
              </button>
            </div>
          </div>

          <div className="portfolio-tabs">
            <button
              className={activeList === "languages" ? "active-tab" : ""}
              onClick={() => setActiveList("languages")}
            >
              Languages
            </button>
            <button
              className={activeList === "frameworks" ? "active-tab" : ""}
              onClick={() => setActiveList("frameworks")}
            >
              Frameworks
            </button>
            <button
              className={activeList === "tools" ? "active-tab" : ""}
              onClick={() => setActiveList("tools")}
            >
              Tools
            </button>
          </div>

          <div className="portfolio-list">
            {activeList === "languages" && (
              <ul className="languages-list">
                <li><span className="portfolio-icon"><RiJavascriptLine /></span>JavaScript</li>
                <li><span className="portfolio-icon"><FaJava /></span>Java</li>
                <li><span className="portfolio-icon"><TbBrandTypescript /></span>TypeScript</li>
                <li><span className="portfolio-icon"><PiFileHtml /></span>HTML</li>
                <li><span className="portfolio-icon"><PiFileCssBold /></span>CSS</li>
              </ul>
            )}

            {activeList === "frameworks" && (
              <ul className="frameworks-list">
                <li><span className="portfolio-icon"><FaReact /></span>React</li>
                <li><span className="portfolio-icon"><RiNextjsLine /></span>Next.js</li>
                <li><span className="portfolio-icon"><FaNodeJs /></span>Node.js</li>
                <li><span className="portfolio-icon"><BiLogoSpringBoot /></span>Spring Boot</li>
              </ul>
            )}

            {activeList === "tools" && (
              <ul className="tools-list">
                <li><span className="portfolio-icon"><FaGithub /></span>GitHub</li>
                <li><span className="portfolio-icon"><FaFigma /></span>Figma</li>
                <li><span className="portfolio-icon"><SiPostgresql /></span>PostgreSQL</li>
                <li><span className="portfolio-icon"><BiLogoMongodb /></span>MongoDB</li>
                <li><span className="portfolio-icon"><DiScrum /></span>Scrum</li>
              </ul>
            )}
          </div>
        </section>

        <section id="contact" className="content contact-section">
          <div className="contact-content">
            <div className="contact-textbox">
              <h1>Lets connect:</h1>
             <p>If you want my mail: <span className="contact-highlight1">willerkjellqvist@gmail.com</span></p>
             <p1>If you want to hear my voice: <span className="contact-highlight2">+46 07 557 1017 </span></p1>
             <div className="social-icons">
              <a href="https://github.com/WilleRonnK" target="_blank" rel="noopener noreferrer" > 
              <FaGithub />
              </a>
              <a href="https://www.instagram.com/willeronnkjellqvist/"target="_blank" rel="noopener noreferrer" > 
              <FaInstagram />
              </a>
              </div>

              </div>

            <div className="contact-email-container">
            <EmailForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
