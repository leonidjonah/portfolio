import React from 'react'
import Header from './component/Header'

function DetailleIndexGca() {
  return (
    <main id="main">
     <Header title="Gestion du cabinet medical (PSI)"/>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <video width="100%" height="500" controls>
                <source src="video/cgm.mp4" type="video/mp4" className="img-fluid" />
              </video>
            </div>

            <div className="col-md-4">
              <h3>Information du projet</h3>
              <ul>
                <li><strong>Categorie</strong>: Application web</li>
                <li><strong>Outils</strong>: Php (CodeIgniter)</li>
                <li><strong>Debut du projet</strong>: Mai, 2020</li>
                <li><strong>Duree du developpement</strong>: 6 mois</li>
                <li><strong>Description</strong>: Gestion du cabinet medical, gestion du stock, medicament, couverture, rendez-vous, comptabilite (Entree et sortie d'argent)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetailleIndexGca