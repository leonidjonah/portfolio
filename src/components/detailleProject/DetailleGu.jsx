import React from 'react'
import Header from './component/Header'

function DetailleGu() {
  return (
    <main id="main">
     <Header title="Gestion des etudiants"/>

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
                <li><strong>Debut du projet</strong>: Mars 2020</li>
                <li><strong>Duree du developpement</strong>: 2 mois</li>
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