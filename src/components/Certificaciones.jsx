import React from "react";
import CardCertificacion from "./Certificaciones/CardCertificacion";
import certificados from "./helpers/certificados";

const Certificaciones = () => {
  return (
    <article
      className="flex flex-col w-[100%] min-h-[50vh] sm:min-h-[100vh] bg-[#e0dffd] gap-2 sm:gap-5 py-4 certifications px-2 md:px-[50px] lg:py-10"
      id="certificaciones"
    >
      <h2 className="text-center font-bold text-[27px] md:text-[35px] lg:text-[38] xl:text-[40px] text-[#028891]">Certificaciones</h2>
      <div className="flex flex-col containerCertifications h-[280px] sm:h-[100%] sm:pb-[50px] md:justify-center md:items-center gap-3 lg:gap-4 ">
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
