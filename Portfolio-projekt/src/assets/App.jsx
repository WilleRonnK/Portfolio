import "./App.css";
import { Link } from "react-scroll";
import { FaHome, FaBook, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import portfolioImage from './assets/IMG_0920.jpg';

function App() {
  const menuItems = [
    {
      id: 1,
      title: "home",
      icon: <FaHome />,
    },
    {
      id: 2,
      title: "portfolio",
      icon: <FaBook />,
    },
    {
      id: 3,
      title: "contact",
      icon: <FaPaperPlane />
    },
  ];

  const useTypewriter = (text, speed = 50, delay = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      let i = 0;
      const startTyping = setTimeout(() => {
        const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, delay);

    return () => {
      clearInterval(startTyping);
    };  
  }, [text, speed, delay]);

    return displayText;
  };
  const homeText = useTypewriter("  Hi, my name is Wille.", 100, 0);
  const homeDescription = useTypewriter("  I'm a Software Developer", 100, 2000);
  const homebutton = useTypewriter(" See my experience", 100, 4500);

  
  return (
    <div className="App">
      <header>
        <nav>
          <h2>Wille Portfolio</h2>

          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-80}
                  duration={1}
                >
                  {menu.title}
                  {menu.icon && <span className="menu-icon">{menu.icon}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {menuItems.map((menu) => (
          <div
            key={menu.id}
            className={`content ${menu.title === "home" ? "home-section" : ""}`}
            id={menu.title}
          >
            {menu.title === "home" ? (
              <div className="home-content">
                <h1>{homeText}</h1>
                <p>{homeDescription}</p>
                {homebutton && (
                <Link
                  to="portfolio"
                  smooth={true}
                  offset={-80}
                  duration={1}
                >
                  <button className="home-button">
                    {homebutton}
                  </button>
                </Link>
                )}
              </div>
            )   : null}

       <div
           key={menu.id}
           className={`content ${menu.title === "portfolio" ? "portfolio-section" : ""}`}
            id={menu.title}
            >
              {menu.title === "portfolio" ? (
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
  
) : null}
              </div>   
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;