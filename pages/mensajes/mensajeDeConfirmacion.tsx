import React from "react";

import MessageComponent from "../../components/ui/shared/MessageComponent";

import { INotificationMessage } from "../../interfaces";

const infoNotificationMessage: INotificationMessage = {
  topic: "Muchas gracias por tu mensaje",
  message: "¡Envío exitoso!",
  comment: "Te responderemos a la brevedad",
};

const MensajeDeConfirmacion = () => {
  return (
    <>
      <MessageComponent
        topic={infoNotificationMessage.topic}
        message={infoNotificationMessage.message}
        comment={infoNotificationMessage.comment}
      />
    </>
  );
};

export default MensajeDeConfirmacion;
