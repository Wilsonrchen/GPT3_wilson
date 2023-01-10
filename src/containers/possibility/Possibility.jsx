import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/Feature Image.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti non
          reiciendis eius. Placeat iste recusandae nulla odit maiores eligendi
          repellendus, velit error. Ratione consequatur at doloremque odit ut
          recusandae enim!{" "}
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
