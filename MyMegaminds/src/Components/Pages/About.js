import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <Link to={"/"}>
      <div className="about">
        <p className="about__heading">About us</p>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          velit ac urna rutrum pretium. Vestibulum non urna suscipit, faucibus
          velit sed, porta quam. Sed pellentesque, urna sit amet tincidunt
          dapibus, felis turpis sagittis justo, id dapibus libero diam sed mi.
          Maecenas id rutrum nisl. Cras tincidunt mattis ex, vitae vulputate
          felis accumsan nec. Phasellus accumsan pretium metus, vitae
          pellentesque lacus egestas ut. Vivamus porttitor porttitor semper.
          Quisque porta quam. Sed pellentesque sodales pretium velit, vitae
          pharetra arcu varius sed.
        </p>
      </div>
    </Link>
  );
}

export default About;
