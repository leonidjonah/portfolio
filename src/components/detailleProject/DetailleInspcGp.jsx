import React from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'


function DetailleInspcGp() {
    return (
        <main id="main">
            <Header title="Gestion des personnels (INSPC - Befelantanana)" />

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <video width="100%" height="500" controls>
                                <source src="video/Inspc_Gp.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>
                        <InformationProject
                            type="Equipe de 2 personnes / Ecole Prestige / Ankadikely - Antananarivo"
                            categorie="Application web"
                            technologie="Php (CodeIgniter)"
                            debut="2019"
                            duree="une semaine"
                            description=" Liste des employees et etudiants et leurs information personnels, etat, echelon. Etat des soutenances des etudiants"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleInspcGp