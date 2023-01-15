import React from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'

function DetailleGu() {
    return (
        <main id="main">
            <Header title="Gestion des etudiants" />

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <video width="100%" height="500" controls>
                                <source src="video/classPrestige.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>
                        <InformationProject
                            type="Equipe de 2 personnes / Ecole Prestige / Ankadikely - Antananarivo"
                            categorie="Application web"
                            technologie="Php (CodeIgniter)"
                            debut="Mars, 2020"
                            duree="2 Mois"
                            description=" Gestion des etudiants, dossiers du l'etudiant inclus les notes, s'il est passant ou redoublant, rendez-vous, payement salaire des professeurs"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleGu