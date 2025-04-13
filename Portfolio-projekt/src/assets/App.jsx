import "./App.css";
import { Link } from "react-scroll";
import { FaHome, FaBook, FaPaperPlane, FaJava, FaReact, FaNodeJs, FaGithub, FaFigma} from 'react-icons/fa';
import {TbBrandTypescript} from 'react-icons/tb';
import { RiJavascriptLine, RiNextjsLine, RiFolderDownloadLine } from 'react-icons/ri';
import {PiFileHtml, PiFileCssBold  } from 'react-icons/pi';
import {BiLogoSpringBoot, BiLogoMongodb } from 'react-icons/bi';
import {SiPostgresql } from 'react-icons/si';
import {DiScrum } from 'react-icons/di';
import { useState, useEffect} from 'react';
import portfolioImage from './assets/IMG_1121.jpg';
import EmailForm from "./components/EmailForm";

const PDF_FILE_URL = '/Wille%20cv%20-%202025.pdf';

function useTypewriter(text, speed = 50, delay = 50) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const startTyping = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [text, speed, delay]);

  return displayText;
}

function App() { 
  const menuItems = [
    { id: 1, 
      title: "home", 
      icon: <FaHome /> },

    { id: 2, 
      title: "portfolio", 
      icon: <FaBook /> },

    { id: 3, 
      title: "contact", 
      icon: <FaPaperPlane /> },
  ];

  const homeText = useTypewriter("  Hi, my name is Wille", 100, 0);
  const homeDescription = useTypewriter("  I'm a Software Developer", 100, 2000);
  const homeButton = useTypewriter(" See my experience", 100, 4500);

  const [activeList, setActiveList] = useState("languages");
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = PDF_FILE_URL;
    link.download = "WilleCv-2025.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="App">
      <header>
        <nav>
          <h2>Wille Portfolio</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.icon} {menu.title}
          </li>
        ))}
      </ul>
    </nav>
  </header>

      <main>
        
        <section id="home" className="content home-section">
          <div className="home-content">
            <h1>{homeText}</h1>
            <p>{homeDescription}</p>
            {homeButton && (
              <Link to="portfolio" smooth={true} offset={-80} duration={500}>
                <button className="home-button">{homeButton}</button>
              </Link>
            )}
          </div>
        </section>

        
        <section id="portfolio" className="content portfolio-section">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <img className="portfolio-image" src={portfolioImage} alt="portfolio" />
            </div>
            <div className="portfolio-textbox">
              <h2>Ung och driven Fullstack-utvecklare</h2>
              <p>
              Under min utbildning fokuserade jag på både backend och frontend, med tyngdpunkt på Java, JavaScript och moderna utvecklingsverktyg som GitHub, IntelliJ, Visual Studio Code, MongoDB och StarUML.
              Min utbildning inkluderade även två LIA-perioder där jag arbetade praktiskt i ett utvecklingsteam hos Klarr med att bygga en plattform som hjälper skolor följa elevers praktikframsteg.
              </p>
            </div>
            
            <div className="cv-button-container">
             <button className="cv-icon-button" onClick={() => downloadCV(PDF_FILE_URL)}>
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
              <li>
                <span className="portfolio-icon">
                  <RiJavascriptLine/>
                </span>
                JavaScript
              </li>
              <li>
                <span className="portfolio-icon">
                  <FaJava/>
                </span>
                Java
              </li>
              <li>
                <span className="portfolio-icon">
                  <TbBrandTypescript/>
                </span>
                TypeScript
              </li>
              <li>
                <span className="portfolio-icon">
                  <PiFileHtml/>
                </span>
                HTML
              </li>
              <li>
                <span className="portfolio-icon">
                  <PiFileCssBold/>
                </span>
                CSS
              </li>
            </ul>
               )}
            {activeList === "frameworks" && (
            <ul className="frameworks-list">
              <li>
                <span className="portfolio-icon">
                <FaReact/>
                </span>
                React
                </li>
              <li>
                <span className="portfolio-icon">
                <RiNextjsLine size={80} />
                </span>
                Node.js
                </li>
              <li>
                <span className="portfolio-icon">
                <FaNodeJs/>
                </span>
                NextJs
                </li>
              <li>
                <span className="portfolio-icon">
                <BiLogoMongodb/>
                </span>
                Spring Boot
                </li>
            </ul>
            )}
            {activeList === "tools" && (
            <ul className="tools-list">
              <li>
                <span className="portfolio-icon">
                <FaGithub/>
                </span>
                Github
                </li>
              <li>
                <span className="portfolio-icon">
                <BiLogoSpringBoot/>
                </span>
                Figma
                </li>
              <li>
                <span className="portfolio-icon">
                <FaFigma/>
                </span>
                PostSQL
                </li>
              <li>
                <span className="portfolio-icon">
                <SiPostgresql/>
                </span>
                MongoDB
                </li>
              <li>
                <span className="portfolio-icon">
                <DiScrum/>
                </span>
                Scrum
                </li>
            </ul>
            )}
          </div>
        </section>

        
        <section id="contact" className="content contact-section">
          <div className="contact-content">
            <h2>Contact Me</h2>
           <EmailForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
