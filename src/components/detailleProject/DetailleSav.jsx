import React from 'react'
import Header from './component/Header'
import InformationProject from './component/InformationProject'


function DetailleSav() {
    return (
        <main id="main">
            <Header title="Service apres vente du l'Entreprise Camson Group" />
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <video width="100%" height="500" controls>
                                <source src="video/Sav.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>
                        <InformationProject
                            type="Collaboration avec l'equipe du Camson Group Mada"
                            categorie="Application web / Mobile"
                            technologie="Symfony / React Native"
                            debut="Octobre, 2020"
                            duree="6 Mois"
                            description="Service apres vente, Message entre client et utilisateur (React Native)"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleSav