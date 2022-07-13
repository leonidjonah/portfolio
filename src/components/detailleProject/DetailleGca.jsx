import React from 'react'
import { Link } from "react-router-dom";

function DetailleIndexGca() {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfoio Details</h2>
            <ol>
              <li><a href="index.html">Projet</a></li>
              <li>Nom anile projet</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <video width="100%" height="500" controls>
                <source src="movie.mp4" type="video/mp4" className="img-fluid" />
              </video>
            </div>

            <div className="col-md-4">
              <h3>Information du projet</h3>
              <ul>
                <li><strong>Categorie</strong>: Web design</li>
                <li><strong>Outils</strong>: zao s zao</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        {/* <button className='btn btn-info'>Retour</button> */}
        <Link to="/" title="Gestion des etudiants" className='btn btn-info'>Retour</Link>
      </div>
    </main>
  )
}

export default DetailleIndexGca