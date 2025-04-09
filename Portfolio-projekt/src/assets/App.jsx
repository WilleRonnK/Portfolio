import "./App.css";
import { Link } from "react-scroll";

function App() {
  const menuItems = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "portfolio",
    },
    {
      id: 3,
      title: "contact",
    },
   
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <h2>Wille Portfolio</h2>

          <ul>
            {menuItems.map((menu) => (
              <li>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-560}
                  duration={1}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {menuItems.map((menu) => (
          <div className="content">
            <h1 className="content-header" id={menu.title}>
              {menu.title}
            </h1>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;