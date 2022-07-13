import './App.css';
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/hero.jpg"
              alt="hero"
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Ranto.LFJ</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <div className="facebook">
                <i className="bx bxl-facebook"></i>
              </div>
              <div className="google-plus">
                <i className="bx bxl-skype"></i>
              </div>
              <div className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active">
                <Link to="/#hero">
                  <i className="bx bx-home"></i> <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link to="/#about">
                  <i className="bx bx-user"></i> <span>A-propos</span>
                </Link>
              </li>
              <li>
                <Link to="/#portfolio">
                  <i className="bx bx-book-content"></i> Projet
                </Link>
              </li>
              <li>
                <Link to="/#resume">
                  <i className="bx bx-file-blank"></i>{" "}
                  <span>Formation et diplome</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button type="button" className="mobile-nav-toggle d-xl-none">
            <i className="icofont-navigation-menu"></i>
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
