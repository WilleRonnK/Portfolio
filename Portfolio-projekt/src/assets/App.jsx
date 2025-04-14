import "./App.css";
import { Link } from "react-scroll";
import { FaHome,FaBook,FaPaperPlane,FaJava,FaReact,FaNodeJs,FaGithub,FaFigma,FaInstagram } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import {RiJavascriptLine,RiNextjsLine,RiFolderDownloadLine,} from "react-icons/ri";
import { PiFileHtml, PiFileCssBold } from "react-icons/pi";
import { BiLogoSpringBoot, BiLogoMongodb } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { useState, useEffect } from "react";
import portfolioImage from "./assets/IMG_1121.jpg";
import EmailForm from "./components/EmailForm";

const PDF_FILE_URL = "/Wille%20cv%20-%202025.pdf";

function useTypewriter(texts, speed = 100, delayBetween = 1500) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index >= texts.length) return;

    const currentString = texts[index];
    if (charIndex <= currentString.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) =>
          prev + currentString.charAt(charIndex)
        );
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCurrentText((prev) => prev + "\n");
        setCharIndex(0);
        setIndex((prev) => prev + 1);
      }, delayBetween);
      return () => clearTimeout(delay);
    }
  }, [charIndex, index, texts, speed, delayBetween]);

  return currentText;
}

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
                <Link to={menu.title} smooth={true} offset={-80} duration={500}>
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
              <h2>Ung och driven Fullstack-utvecklare</h2>
              <p>
                Under min utbildning fokuserade jag på både backend och frontend,
                med tyngdpunkt på Java, JavaScript och moderna
                utvecklingsverktyg som GitHub, IntelliJ, Visual Studio Code,
                MongoDB och StarUML. Min utbildning inkluderade även två
                LIA-perioder där jag arbetade praktiskt i ett utvecklingsteam
                hos Klarr med att bygga en plattform som hjälper skolor följa
                elevers praktikframsteg.
              </p>
            </div>

            <div className="cv-button-container">
              <button className="cv-icon-button" onClick={downloadCV}>
                <RiFolderDownloadLine />
              </button>
              Download CV
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
             <p>If you want my mail: willerkjellqvist@gmail.com</p>
             <p>If you want to hear my voice: 0705571017</p>
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
