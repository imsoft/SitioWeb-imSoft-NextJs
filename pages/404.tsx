import React from "react";
import MessageComponent from "../components/ui/shared/MessageComponent";
import { INotificationMessage } from "../interfaces";

const infoNotificationMessage: INotificationMessage = {
  topic: "404",
  message: "Esta página no existe",
  comment: "¡Ups! Parece que has llegado a una página que no existe.",
};

const ErrorPage = () => {
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

export default ErrorPage;
