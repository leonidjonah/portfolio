import React, { useState } from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'

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
            <Header title="Gestion du facturation du l'Entreprise Camson group" />
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
                        <InformationProject
                            type="Collaboration avec l'equipe du Camson Group Mada"
                            categorie="Application web / mobile"
                            technologie="Symfony / React Native"
                            debut="Juillet, 2022"
                            duree="6 Mois"
                            description="Facturation, stock, message entre utilisateur et client a propos de la facteur"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleIndexGca