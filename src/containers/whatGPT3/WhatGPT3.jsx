import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin id=wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit alias ut nihil, hic quam, ducimus rem eveniet tenetur nisi quasi porro repudiandae vero numquam unde omnis pariatur nulla, doloremque itaque?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident sequi odio nostrum nisi tempora commodi molestias odit itaque, minima dignissimos dolore! Explicabo accusamus illum natus officiis libero labore ratione ex."
        />

        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem omnis quibusdam, obcaecati, cumque praesentium voluptas quam veniam, minus nihil cum ratione eaque id quis ducimus ipsa nam amet consectetur!"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto esse aut quis eligendi ipsum nisi, similique asperiores odit ullam eum error impedit voluptas exercitationem dolore distinctio voluptatum ad. Omnis, ratione!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
