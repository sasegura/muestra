import React from "react";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Nombre: <span>{cita.name}</span>{" "}
    </p>
    <p>
      Email: <span>{cita.mail}</span>{" "}
    </p>
    <p>
      Mensaje: <span>{cita.messaje}</span>{" "}
    </p>
    <p>
      Hora: <span>{cita.hora}</span>{" "}
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

export default Cita;
