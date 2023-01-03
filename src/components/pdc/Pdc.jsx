import React from "react";
import Body from "../Body";
function Pdc() {
  return (
    <div>
      <section
        style={{
          backgroundColor: '#050d18'
        }}
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Rantonirina Leonid FJ</h1>
          <p>
            Develloper &nbsp;
            <span className="underline">Web et Mobile senior</span>
          </p>
        </div>
      </section>
      <Body />
    </div>
  );
}
export default Pdc;
