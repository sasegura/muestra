import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="He visitado muchas barberías en la ciudad, pero ninguna se compara con [Nombre de la Barbería]. El ambiente es relajado, los barberos son expertos en su oficio y los resultados son siempre excepcionales. ¡Simplemente fenomenal!"
            author="Luis G."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="¡Me encanta este lugar! Siempre salgo sintiéndome como una estrella de cine. El personal es amable, el servicio es de primera clase y el ambiente es acogedor. Definitivamente mi barbería de referencia."
            author="Ana S."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="No suelo dejar reseñas, pero realmente se lo merece. Han convertido el acto de cortarse el pelo en una experiencia extraordinaria. No puedo imaginar ir a ningún otro lugar."
            author="Sofía D."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Siempre he sido muy exigente con mi cabello, pero desde que la descubrí, nunca he mirado atrás. La atención al detalle y la pasión por su trabajo se reflejan en cada corte. ¡Simplemente magnífico!"
            author="Andrea M."
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="¡Recomiendo completamente [Nombre de la Barbería]! No solo me dejaron con un corte de cabello impecable, sino que también disfruté de un afeitado relajante y un servicio excepcional. ¡Ya he reservado mi próxima cita!"
            author="Juan Pérez"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Increíble experiencia. Me encantó el ambiente acogedor y el trato amable del personal. Mi barbero fue muy atento y profesional, y me dio el mejor corte de cabello que he tenido en años. Definitivamente volveré."
            author="María Rodríguez"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
