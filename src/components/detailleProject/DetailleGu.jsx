import React from 'react'

function DetailleGu() {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
            <ol>
              <li><a href="index.html">Projet</a></li>
              <li>Gestion des etudiants</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <video width="100%" height="500" controls>
                <source src="video/classPrestige.mp4" type="video/mp4" className="img-fluid" />
              </video>
            </div>

            <div className="col-md-4">
              <h3>Information du projet</h3>
              <ul>
                <li><strong>Categorie</strong>: Application web</li>
                <li><strong>Outils</strong>: Php (CodeIgniter)</li>
                <li><strong>Debut du projet</strong>: 30 Mars, 2020</li>
                <li><strong>Durree du developpement</strong>: 2 mois</li>
                <li><strong>Description</strong>: Gestion des etudiants, dossiers du l'etudiant inclus les notes, s'il est passant ou redoublant, rendez-vous, payement salaire des professeurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetailleGu