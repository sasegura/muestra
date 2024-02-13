import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cita from "../Elements/Citas";
var uuid = require("uuid-v4");

export default function Contact({ data }) {
  const [name, setName] = useState("");
  const [messaje, setMessaje] = useState("");
  const [mail, setMail] = useState("");

  //Citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) citasIniciales = [];

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia.
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]); // EL [] => es un Array de Dependencias.

  //Funcion que tome las citas actuales y agrege la nueva
  const crearCita = () => {
    guardarCitas([...citas, { id: uuid(), name, mail, messaje }]);
  };

  // Funcion que elimina una cia por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contacto</h1>
            <p className="font13">{data}</p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"> */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Form>
                <label className="font13">Nombre:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) => setName(e.target.value)}
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => setMail(e.target.value)}
                  className="font20 extraBold"
                />
                <label className="font13">Mensaje:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setMessaje(e.target.value)}
                  className="font20 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  onClick={crearCita}
                  value="Enviar Mensaje"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "30px" }}>
            {citas.map((cita, index) => (
              <Cita key={index} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
