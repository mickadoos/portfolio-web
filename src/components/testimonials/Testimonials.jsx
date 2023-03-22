// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file 
import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/Yabel.png";
import AVTR2 from "../../assets/Turró.png";
import AVTR3 from "../../assets/JusiBP.png";
import AVTR4 from "../../assets/Leticia.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Yabel Rodriguez",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, illo? Voluptatibus labore ut soluta sunt?",
    },
    {
      avatar: AVTR2,
      name: "Josep Turro",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, illo? Voluptatibus labore ut soluta sunt?",
    },
    {
      avatar: AVTR3,
      name: "Josep Bardes",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, illo? Voluptatibus labore ut soluta sunt?",
    },
    {
      avatar: AVTR4,
      name: "Leticia Santos",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, illo? Voluptatibus labore ut soluta sunt?",
    },
  ];
  return (
    // 10.2 chanmge all components to a section parent container with his correspondent id
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      //install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide  key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
