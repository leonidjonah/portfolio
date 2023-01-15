import React from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'

function DetailleTracage() {
    return (
        <main id="main">
            <Header title="Tracage et identification sur les terrains des personnes concernees" />
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <span className="nav-link text-white" style={{ cursor: "pointer" }}>Mobile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="centeredDetaille">En Cours ...</div>
                        </div>
                        <InformationProject
                            type="Projet personnel pour l'amelioration de mon competence et aussi passe temps"
                            categorie="mobile"
                            technologie="Symfony / React Native"
                            debut="Janvier, 2023"
                            duree="Indeterminer"
                            description="Tracage et identification sur les terrains des personnes concernees et des autres fonctionnalites (calcul de la surface du polygone)"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleTracage