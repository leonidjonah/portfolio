import React from 'react'

function Skills() {
  return (
    <>
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Competence</h2>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '100%'}}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '50%'}}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">60%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '60%'}}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">60%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '60%'}}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                  <span className="skill">
                    React et React Native <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '50%'}}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Express <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '80%'}}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CodeIgniter <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '80%'}}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Symfony <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: '80%'}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Skills