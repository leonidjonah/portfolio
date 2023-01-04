import React, { useState } from 'react'
import Header from './component/Header'

function DetailleDossierMobile() {
    const [visibilityMobile, setvisibilityMobile] = useState(false)
    const [visibilityWeb, setvisibilityWeb] = useState(true)
    function mobileShow() {
        setvisibilityWeb(true)
        setvisibilityMobile(false)
    }
    function webShow() {
        setvisibilityWeb(false)
        setvisibilityMobile(true)
    }
    return (
        <main id="main">
            <Header title="Gestion des courriers et dossiers a Madagascar au niveau du Direction Generale des Finances et des Affaires Generales" />
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <span className="nav-link text-white" style={{ cursor: "pointer" }} onClick={webShow} aria-current="page">Web</span>
                                            </li>
                                            <li className="nav-item">
                                                <span className="nav-link text-white" style={{ cursor: "pointer" }} onClick={mobileShow}>Mobile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <img src="assets/enCours.jpg" hidden={visibilityWeb} width="100%" height="500" className="img-fluid" alt="" />
                            <div className="centeredDetaille">En Cours</div>
                            <img src="assets/enCours.jpg" hidden={visibilityMobile} width="100%" height="500" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-4">
                            <h3>Information du projet</h3>
                            <ul>
                                <li className='text-center'><strong>Projet en entant que freelance solo</strong></li>
                                <li><strong>Categorie</strong>: Application web / mobile</li>
                                <li><strong>Technologie</strong>: Symfony / React Native</li>
                                <li><strong>Debut du projet</strong>: 1 Octobre, 2022</li>
                                <li><strong>Duree du developpement</strong>: 8 mois</li>
                                <li><strong>Description</strong>: Gerer les courriers et les dossiers des usagiers, affiche la statistique sur une critique definie (Globales ou structure), detailles de l'etat d'une dossier (instance, duree du traitement, sns...)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleDossierMobile