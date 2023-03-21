// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file 
import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/aso-friends.jpg";
import IMG2 from "../../assets/belfast-zoo.jpg";
import IMG3 from "../../assets/bowling.jpg";
import IMG4 from "../../assets/escalada-pro.jpg";
import IMG5 from "../../assets/DPlan.png";
import IMG6 from "../../assets/friki-festa.jpg";

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'This is a portfolio item title',
      github: 'https://github.com/mickadoos',
      demo: 'https://github.com/mickadoos'
    },
    {
      id: 2,
      image: IMG2,
      title: 'This is a portfolio item title',
      github: 'https://github.com/mickadoos',
      demo: 'https://github.com/mickadoos'
    },
    {
      id: 3,
      image: IMG3,
      title: 'This is a portfolio item title',
      github: 'https://github.com/mickadoos',
      demo: 'https://github.com/mickadoos'
    },
    {
      id: 4,
      image: IMG4,
      title: 'This is a portfolio item title',
      github: 'https://github.com/mickadoos',
      demo: 'https://github.com/mickadoos'
    },
    {
      id: 5,
      image: IMG5,
      title: 'This is a portfolio item title',
      github: 'https://github.com/mickadoos',
      demo: 'https://github.com/mickadoos'
    },
    {
      id: 6,
      image: IMG6,
      title: 'This is a portfolio item title',
      github: 'https://github.com/mickadoos',
      demo: 'https://github.com/mickadoos'
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <container className="portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a
            href={github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={demo}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          </div>
        </article>
            )
          })
        }
      </container>
    </section>
  );
};

export default Portfolio;
