import React from 'react'
import Header from './component/Header'


function DetailleSav() {
    return (
        <main id="main">
            <Header title="Service apres vente du l'Entreprise Camson Group"/>
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <video width="100%" height="500" controls>
                                <source src="video/Sav.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>

                        <div className="col-md-4">
                            <h3>Information du projet</h3>
                            <ul>
                                <li><strong>Categorie</strong>: Application web / mobile</li>
                                <li><strong>Outils</strong>: Symfony / ReactNative</li>
                                <li><strong>Debut du projet</strong>: 02 Octobre, 2022</li>
                                <li><strong>Durree du developpement</strong>: 1 mois</li>
                                <li><strong>Description</strong>: Service apres vente, Message entre client et utilisateur (React Native)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleSav