// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file 
// 13.0 create skills component .jsx and .css and copy the experience component and change the name
import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    // 10.2 chanmge all components to a section parent container with his correspondent id
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
