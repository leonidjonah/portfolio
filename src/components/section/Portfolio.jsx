import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [visibilityMobile, setvisibilityMobile] = useState(false)
  const [visibilityWeb, setvisibilityWeb] = useState(false)
  // eslint-disable-next-line
  const [loadingApp, setloadingApp] = useState(false)

  const [mobileAndLoading, setmobileAndLoading] = useState(false)
  const [webAndLoading, setwebAndLoading] = useState(false)

  function mobileShow() {
    setvisibilityWeb(true)
    setvisibilityMobile(false)
    setloadingApp(true)
    setmobileAndLoading(false)
    setwebAndLoading(true)

  }
  function webShow() {
    setvisibilityWeb(false)
    setvisibilityMobile(true)
    setloadingApp(true)
    setmobileAndLoading(true)
    setwebAndLoading(false)

  }
  function showAll() {
    setvisibilityMobile(false)
    setvisibilityWeb(false)
    setloadingApp(false)
    setmobileAndLoading(false)
    setwebAndLoading(false)

  }
  function enCours() {
    setvisibilityMobile(true)
    setvisibilityWeb(true)
    setloadingApp(false)
    setmobileAndLoading(false)
    setwebAndLoading(false)

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
                <li onClick={showAll}><span className="badge badge-dark">10</span> Tout</li>
                <li onClick={mobileShow} ><span className="badge badge-dark">3</span> Mobile</li>
                <li onClick={webShow}><span className="badge badge-dark">7</span> Web</li>
                <li onClick={enCours}><span className="badge badge-dark">4</span> En cours</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6 portfolio-item filter-loading" hidden={mobileAndLoading}>
              <div className="portfolio-wrap">
                <img src="imageProjet/loginDossierdgfag.png" style={{ height: '450px', width: '500px' }} className="img-fluid" alt="" />
                <div className="centered">En Cours</div>
                <div className="portfolio-links">
                  <Link to="/detailleDossierMobile" title="Projet en cours"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-loading" hidden={mobileAndLoading}>
              <div className="portfolio-wrap">
                <img src="imageProjet/mijo2.png" style={{ height: '450px', width: '500px' }} className="img-fluid" alt="" />
                <div className="centered">En Cours</div>
                <div className="portfolio-links">
                  <Link to="/#" title="Projet en cours"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" hidden={visibilityMobile}>
              <div className="portfolio-wrap">
                <img src="imageProjet/mobileEspaceClient.png" style={{ height: '450px', width: '500px' }} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/mobileClient" title="Gestion facturation"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
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
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" hidden={visibilityWeb}>
              <div className="portfolio-wrap">
                <img src="imageProjet/inspc_gp.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="/inspcGp" title="Gestion des personnels"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-loading" hidden={webAndLoading}>
              <div className="portfolio-wrap">
                <img src="imageProjet/cccomputer.png" className="img-fluid" alt="" />
                <div className="centered">En Cours</div>
                <div className="portfolio-links">
                  <Link to="/detailleCccomputer" title="Projet en cours"><i className="bx bx-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-loading" hidden={webAndLoading}>
              <div className="portfolio-wrap">
                <img src="imageProjet/dossierDGFAG.png" className="img-fluid" alt="" />
                <div className="centered">En Cours</div>
                <div className="portfolio-links">
                  <Link to="/detailleDossierMobile" title="Projet en cours"><i className="bx bx-plus"></i></Link>
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