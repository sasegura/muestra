import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cita from "../Elements/Citas";
import db from "../Elements/FirebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// var uuid = require("uuid-v4");

export default function Contact({ data }) {
  const [name, setName] = useState("");
  const [messaje, setMessaje] = useState("");
  const [email, setMail] = useState("");

  const [lista, setLista] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, "mensajes"),
      (snapshot) => {
        setLista(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const crearCita = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "mensajes"), {
        name: name,
        email: email,
        messaje: messaje,
      });
    } catch (error) {
      console.log(error);
    }
    clearForm();
  };

  const clearForm = () => {
    setMail("");
    setName("");
    setMessaje("");
  };

  const deleteMessage = async (id) => {
    try {
      deleteDoc(doc(db, "mensajes", id));
    } catch (error) {
      console.log(error);
    }
  };
  const updateMessage = (id) => {
    // e.preventDefault();
    updateDoc(doc(db, "mensajes", id), {
      name: name,
      email: email,
      messaje: messaje,
    });
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setMail(e.target.value)}
                  className="font20 extraBold"
                />
                <label className="font13">Mensaje:</label>

                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  value={messaje}
                  onChange={(e) => setMessaje(e.target.value)}
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
            {lista.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={deleteMessage} />
            ))}
          </div>
          {/* <div className="row" style={{ paddingBottom: "30px" }}>
            <Firebase />
          </div> */}
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
// const ContactImgBox = styled.div`
//   max-width: 180px;
//   align-self: flex-end;
//   margin: 10px 30px 10px 0;
// `;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
