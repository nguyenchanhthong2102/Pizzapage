import React from "react";
import MutilplePizza from "../asset/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MutilplePizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut tenetur
          ipsam odit repellendus, qui et! Unde impedit possimus, beatae
          exercitationem deleniti in voluptatum ea commodi. Sequi voluptatibus
          delectus error. Optio incidunt suscipit temporibus quisquam delectus
          vero sit, corrupti tempora placeat ipsa quibusdam? Nulla eos, quo
          provident molestias quos labore quasi excepturi perferendis blanditiis
          sint quaerat ratione, adipisci placeat quam. Repellat officia quia
          totam at porro alias eaque nobis? Mollitia a qui itaque, cum sapiente
          hic blanditiis soluta omnis incidunt rerum perferendis nostrum,
          quisquam tempora necessitatibus. Molestias quidem similique rem.
        </p>
      </div>
    </div>
  );
}

export default About;
