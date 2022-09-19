import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [visibilityMobile, setvisibilityMobile] = useState(false)
  const [visibilityWeb, setvisibilityWeb] = useState(false)
  function mobileShow() {
    setvisibilityWeb(true)
    setvisibilityMobile(false)
  }
  function webShow() {
    setvisibilityWeb(false)
    setvisibilityMobile(true)
  }
  function showAll() {
    setvisibilityMobile(false)
    setvisibilityWeb(false)
  }
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
                <li data-filter="*" onClick={showAll}>Tout</li>
                <li data-filter=".filter-app" onClick={mobileShow} >Mobile</li>
                <li data-filter=".filter-web" onClick={webShow}>Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" hidden={visibilityWeb}>
              <div className="portfolio-wrap">
                <img src="imageProjet/cgm.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/detailleGca" title="Gestion du cabinet medical (PSI)"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" hidden={visibilityWeb}>
              <div className="portfolio-wrap">
                <img src="imageProjet/classPrestige.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/detailleGu" title="Gestion des etudiants"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" hidden={visibilityWeb}>
              <div className="portfolio-wrap">
                <img src="imageProjet/sav.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/detailleSav" title="Service apres vente"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" hidden={visibilityWeb}>
              <div className="portfolio-wrap">
                <img src="imageProjet/espaceClient.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/detailleClient" title="Gestion facturation"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" hidden={visibilityMobile}>
              <div className="portfolio-wrap">
                <img src="imageProjet/mobileEspaceClient.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/detailleClient" title="Gestion facturation"><i className="bx bx-plus"></i></Link>
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