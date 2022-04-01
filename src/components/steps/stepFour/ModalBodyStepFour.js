import React from "react";

const ModalBodyStepFourComponent = () => {
  return (
    <div className="modal-step-four">
      <div className="modal-step-four-center">
        <img alt="Modal" src="/assets/images/terms-modal.png"/>
        <h4>Términos y Condiciones</h4><br/>
      </div>
      <p>
        Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad,
        utilizaremos datos personales de identificación, contacto y laborales.
      </p>
      <p>
        Los datos personales que AtomicLabs recaba de usted, serán utilizados para las siguientes
        finalidades que son necesarias para ofrecer nuestros servicios
      </p>
      <ul>
        <li>
          <p>
            AtomicLabs requiere utilizar sus datos personales para incluirlo en la base de datos
            que utilizamos para prestar los servicios de reclutamiento, selección de personal,
            administración de nómina y prestación de servicios. AtomicLabs utilizará sus datos 
            personales para evaluar si es posible colocarlo en las vacantes de empleo de la compañía
            o de los clientes de AtomicLabs y para conocer sus aptitudes, antecedentes y referencias
            laborales. En este sentido, AtomicLabs utilizará sus datos personales para ponerse en 
            contacto con usted en relación a las vacantes para las cuales podría ser candidato.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ModalBodyStepFourComponent;