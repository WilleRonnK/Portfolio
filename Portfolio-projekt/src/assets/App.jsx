import "./App.css";
import { Link } from "react-scroll";
import { FaHome, FaBook, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const menuItems = [
    {
      id: 1,
      title: "home",
      icon: <FaHome />,
      Image: 'https://i.sstatic.net/jGlzr.png'
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

  const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);

    return displayText;
  };
  const homeText = useTypewriter("  Hi, my name is Wille.");
  const homeDescription = useTypewriter("  I'm a Software Developer");

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
              <div className="home-text">
                <h1>{homeText}</h1>
                <p>{homeDescription}</p>
              </div>
            ) : (
              <h1 className="content-header">{menu.title}</h1>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;