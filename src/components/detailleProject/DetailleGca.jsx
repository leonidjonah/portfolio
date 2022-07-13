import React from 'react'

function DetailleIndexGca() {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
            <ol>
              <li><a href="index.html">Projet</a></li>
              <li>Gestion du gabinet medical (PSI)</li>
            </ol>
          </div>
        </div>
      </section>

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
                <li><strong>Debut du projet</strong>: 15 Juillet, 2021</li>
                <li><strong>Durree du developpement</strong>: 6 mois</li>
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