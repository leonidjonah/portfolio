import React from 'react'
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Projet</h2>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">Tout</li>
              <li data-filter=".filter-app">Mobile</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="imageProjet/cgm.png" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <Link to="/detailleGca" title="Gestion du cabinet medical (PSI)"><i className="bx bx-plus"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="imageProjet/classPrestige.png" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <Link to="/detailleGu" title="Gestion des etudiants"><i className="bx bx-plus"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Portfolio