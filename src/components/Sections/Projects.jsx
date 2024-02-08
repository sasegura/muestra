import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/2.jpg";
import ProjectImg3 from "../../assets/img/projects/3.jpg";
import ProjectImg4 from "../../assets/img/projects/4.jpg";
import ProjectImg5 from "../../assets/img/projects/5.jpg";
import ProjectImg6 from "../../assets/img/projects/6.jpg";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestros Servicios</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Afeitados Tradicionales"
                text="Experimenta la elegancia y el lujo de un afeitado tradicional con nuestra gama de servicios de afeitado. Utilizando técnicas ancestrales y productos de alta calidad, te ofrecemos un afeitado impecable y una experiencia de cuidado facial rejuvenecedora."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Cortes de Cabello"
                text="Nuestro equipo de barberos expertos está dedicado a proporcionarte el corte de cabello perfecto que se adapte a tu estilo y personalidad. Desde cortes clásicos hasta tendencias modernas, estamos aquí para transformar tu look y realzar tu confianza."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Cortes de Cabello Personalizados"
                text="Nuestros barberos son maestros en el arte del corte de cabello. Desde estilos clásicos hasta tendencias modernas, trabajaremos contigo para crear el look perfecto que refleje tu estilo y personalidad."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Productos Premium"
                text="Solo utilizamos productos de la más alta calidad para garantizar resultados excepcionales. Desde champús y acondicionadores hasta pomadas y aceites para barba, nuestros productos premium ayudarán a mantener tu cabello y piel en óptimas condiciones."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Servicios Especiales para Niños"
                text="Ofrecemos servicios de barbería especialmente diseñados para niños, donde pueden disfrutar de una experiencia divertida y cómoda mientras reciben un corte de cabello de calidad. Nuestros barberos son expertos en tratar con niños y asegurar que se sientan relajados durante su visita."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Arreglos de Barba"
                text="Mantén tu barba impecable con nuestros servicios de arreglo de barba. Ya sea que desees un perfilado preciso, un suavizado de textura o un diseño único, nuestros barberos te ayudarán a lograr el estilo de barba perfecto que complemente tu apariencia y personalidad."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
