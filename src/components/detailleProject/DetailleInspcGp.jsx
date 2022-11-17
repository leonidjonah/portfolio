import React from 'react'


function DetailleInspcGp() {
    return (
        <main id="main">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Portfolio Details</h2>
                        <ol>
                            <li>Gestion des personnels (INSPC - Befelantanana)</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <video width="100%" height="500" controls>
                                <source src="video/Inspc_Gp.mp4" type="video/mp4" className="img-fluid" />
                            </video>
                        </div>

                        <div className="col-md-4">
                            <h3>Information du projet</h3>
                            <ul>
                                <li><strong>Categorie</strong>: Application web</li>
                                <li><strong>Outils</strong>: Symfony</li>
                                <li><strong>Debut du projet</strong>: Mars, 2020</li>
                                <li><strong>Durree du developpement</strong>: 1 mois</li>
                                <li><strong>Description</strong>: Liste des employees et etudiants et leurs information personnels, etat, echelon. Etat des soutenances des etudiants</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailleInspcGp