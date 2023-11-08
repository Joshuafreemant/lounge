import React from "react";

const Contact = () => {
  return (
    <div className="py-8 px-10 md:px-20">
      <h1 className="text-black font-extrabold text-[38px] text-center md:text-[55px]">CONTACT</h1>
      <div className="flex flex-col gap-4">
        <p>
          Pour obtenir un devis pour votre mariage, veuillez visiter cette page
          :{" "}
          <a href="" className="text-[#F07D00]">
            FORMULES DE MARIAGES
          </a>
        </p>
        <p>
          Si vous souhaitez un devis pour votre entreprise, veuillez visiter
          cette page :{" "}
          <a href="" className="text-[#F07D00]">
            FORMULES DE MARIAGES
          </a>
        </p>

        <p>
          Pour les demandes de baptême, communion, anniversaire, veilliez
          sélectionné entre un pack dans les formules entreprises ou mariage
        </p>
      </div>
    </div>
  );
};

export default Contact;
