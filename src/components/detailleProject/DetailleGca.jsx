import React from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'

function DetailleIndexGca() {
    return (
        <main id="main">
            <Header title="Gestion du cabinet medical (PSI)" />

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <video width="100%" height="500" controls>
                                <source src="video/cgm.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>
                        <InformationProject
                            type="Solo / Psi Ankadindratombo - Antananarivo"
                            categorie="Application web"
                            technologie="Php (CodeIgniter)"
                            debut="Mai, 2020"
                            duree="6 Mois"
                            description="Gestion du cabinet medical, gestion du stock, medicament, couverture, rendez-vous, comptabilite (Entree et sortie d'argent)"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleIndexGca