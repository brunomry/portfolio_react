import React from "react";
import CardCertificacion from "./Certificaciones/CardCertificacion";
import certificados from "./helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className=" d-flex flex-column gap-2 gap-sm-3 rounded-2 certifications section px-5 py-lg-4"
      id="certificaciones"
    >
      <h2 className="text-center display-6 fw-bold ">Certificaciones</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-lg-2 gap-xl-3">
        {certificados.map((certificado) => (
          <CardCertificacion
            key={certificado.id}
            certificado={certificado}
          ></CardCertificacion>
        ))}
      </div>
    </article>
  );
};

export default Certificaciones;
