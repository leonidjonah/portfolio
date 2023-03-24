import React from 'react'

function About() {
  return (
    <>
         <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>A-propos</h2>
              <p>
                Passionné des technologies, motivée sur la
                programmation et création d'application, je souhaiterais relever
                des défis et mettre mes compétences à disposition dans les
                différents projets informatiques.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 content">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Date de naissance:</strong> 11 Avril 1999
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Phone:</strong> +2613421823
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Adresse:</strong> Fianarantsoa, Madagascar
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Diplome:</strong> Master II
                  </li>
                </ul>
              </div>
              <div className="col-md-6 content">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i> <strong>Age:</strong>{" "}
                    23
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Email:</strong> leonidjonah@gmail.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Freelance:</strong> Disponible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About
