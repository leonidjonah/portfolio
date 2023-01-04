import React, { useState } from 'react'
import Header from './component/Header'

function DetailleIndexGca() {
    const [visibilityMobile, setvisibilityMobile] = useState(true)
    const [visibilityWeb, setvisibilityWeb] = useState(false)
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
            <Header title="Gestion du facturation du l'Entreprise Camson group"/>
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
                            <video width="100%" height="500" controls hidden={visibilityWeb}>
                                <source src="video/client.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                            <video width="100%" height="500" controls hidden={visibilityMobile}>
                                <source src="video/mobileClient.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>

                        <div className="col-md-4">
                            <h3>Information du projet</h3>
                            <ul>
                                <li className='text-center'><strong>Collaboration avec l'equipe du Camson Group Madagascar</strong></li>
                                <li><strong>Categorie</strong>: Application web / mobile</li>
                                <li><strong>Outils</strong>: Symfony / React Native</li>
                                <li><strong>Debut du projet</strong>: 15 Juillet, 2021</li>
                                <li><strong>Duree du developpement</strong>: 6 mois</li>
                                <li><strong>Description</strong>: Gestion du cabinet medical, gestion du stock, medicament, couverture, rendez-vous, comptabilite (Entree et sortie d'argent), message entre client et utilisateur (web et mobile), les clients peuvent etre telecharger sont facture via l'application mobile (React Native)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleIndexGca