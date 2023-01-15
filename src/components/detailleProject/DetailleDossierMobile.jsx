import React from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'

function DetailleDossierMobile() {

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
                                                <span className="nav-link text-white" style={{ cursor: "pointer" }} aria-current="page">Web</span>
                                            </li>
                                            <li className="nav-item">
                                                <span className="nav-link text-white" style={{ cursor: "pointer" }} >Mobile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="centeredDetaille">En Cours (95%)...</div>
                        </div>
                        <InformationProject
                            type="Solo / DGFAG"
                            categorie="Application web / mobile"
                            technologie="Symfony / React Native"
                            debut="Octobre, 2022"
                            duree="6 Mois"
                            description=" Gerer les courriers et les dossiers des usagiers, affiche la statistique sur une critique definie (Globales ou structure), detailles de l'etat d'une dossier (instance, duree du traitement, sns...)"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleDossierMobile