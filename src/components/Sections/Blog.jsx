import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog({ data }) {
  return (
    <Wrapper id="blog">
      {/* <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">¿Que peinsan de nosotros?</h1>
            
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Increibles!"
                text="He sido cliente durante años y nunca me han decepcionado. Siempre se mantienen al día con las últimas tendencias y técnicas, y el nivel de profesionalismo es excepcional. ¡No puedo imaginar ir a otro lugar!"
                tag="cliente"
                author="Ana López"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Repetiré!"
                text="¡Qué gran descubrimiento! Después de tantas malas experiencias en otros lugares, finalmente encontré un lugar donde puedo confiar en que saldré con el corte que quiero. El equipo es talentoso y realmente se preocupa por la satisfacción del cliente. ¡No puedo esperar para mi próxima cita!"
                tag="cliente"
                author="Javier Martínez"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Buena atención!"
                text="La atención al detalle en es insuperable. Cada vez que voy, me sorprenden con pequeños detalles que hacen que la experiencia sea aún más especial. No solo salgo con un gran corte, sino también con una sensación de bienestar. ¡Altamente recomendado!"
                tag="cliente"
                author="Carlos Gutiérrez"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="La mejor!"
                text="Desde que descubrí, no he ido a otro lugar para cortarme el pelo. Siempre reciben a sus clientes con una sonrisa y se nota que son apasionados por lo que hacen. ¡Recomendaría este lugar a cualquiera que busque un corte de calidad!"
                tag="cliente"
                author="María Rodríguez"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Experiencia!"
                text="¡Increíble experiencia! El corte de cabello fue exactamente lo que quería y el ambiente del lugar es genial. Definitivamente volveré."
                tag="cliente"
                author="Alejandro R"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Ambiente!"
                text="¡Increíble experiencia ! El ambiente es acogedor y el personal es amable y profesional. Mi barbero entendió exactamente lo que quería y el resultado superó mis expectativas. ¡Definitivamente regresaré!"
                tag="cliente"
                author="Juan Díaz"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div> */}
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">¿Que piensan de nosotros?</h1>
            <p className="font13">{data.intro}</p>
          </HeaderInfo>
          <TestimonialSlider testimonials={data.testimonials} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
