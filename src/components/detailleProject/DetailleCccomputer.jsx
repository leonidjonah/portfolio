import React, { useState } from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'

function DetailleCccomputer() {
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
            <Header title="Cccomputer" />
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
                            <div className="centeredDetaille">En Cours ...</div>
                        </div>
                        <InformationProject
                            categorie="Application web / mobile"
                            technologie="Symfony / React Native"
                            debut="2 Janvier, 2023"
                            duree="Indeterminer"
                            description="Regard sur toutes les activites des magasins du Camson Group France"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleCccomputer