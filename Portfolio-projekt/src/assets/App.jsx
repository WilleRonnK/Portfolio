import "./App.css";
import { Link } from "react-scroll";
import { FaHome, FaBook, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect, act } from 'react';
import portfolioImage from './assets/IMG_0920.jpg';

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

  const homeText = useTypewriter("  Hi, my name is Wille.", 100, 0);
  const homeDescription = useTypewriter("  I'm a Software Developer", 100, 2000);
  const homeButton = useTypewriter(" See my experience", 100, 4500);

  const [activeList, setActiveList] = useState("projects");
  return (
    <div className="App">
      <header>
        <nav>
          <h2>Wille Portfolio</h2>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.title} smooth={true} offset={-80} duration={500}>
                  {menu.title}
                  {menu.icon && <span className="menu-icon">{menu.icon}</span>}
                </Link>
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
              <h2>About My Portfolio</h2>
              <p>
                This is a brief description of my portfolio. Here, you can find my
                projects, skills, and experiences as a software developer.
              </p>
            </div>
          </div>

          <div className="portfolio-tabs">
            <button onClick={() => setActiveList("languages")}>Languages</button>
            <button onClick={() => setActiveList("frameworks")}>Frameworks</button>
            <button onClick={() => setActiveList("tools")}>Tools</button>
          </div>

          <div className="portfolio-list">
            {activeList === "languages" && (
            <ul className="languages-list">
              <li>JavaScript</li>
              <li>Java</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
               )}
            {activeList === "frameworks" && (
            <ul className="frameworks-list">
              <li>React</li>
              <li>Node.js</li>
              <li>NextJs</li>
              <li>Spring Boot</li>
            </ul>
            )}
            {activeList === "tools" && (
            <ul className="tools-list">
              <li>Github</li>
              <li>Figma</li>
              <li>PostSQL</li>
              <li>MongoDB</li>
              <li>Scrum</li>
            </ul>
            )}
          </div>
        </section>

        
        <section id="contact" className="content contact-section">
          <div className="contact-content">
            <h2>Contact Me</h2>
            <p>Feel free to reach out via email or through my social channels!</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
