import React from "react";

import MessageComponent from "../../components/ui/shared/MessageComponent";

import { INotificationMessage } from "../../interfaces";

const infoNotificationMessage: INotificationMessage = {
  topic: "Hubo un error al enviar un mensaje",
  message: "Perdón por las molestias",
  comment: "Te recomendamos volver a mandar el mensaje",
};

const MensajeDeError = () => {
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

export default MensajeDeError;
