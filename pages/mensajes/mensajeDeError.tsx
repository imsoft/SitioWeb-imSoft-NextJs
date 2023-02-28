import React from "react";
import Head from "next/head";

import { Metatags } from "../../components/metatags";

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
      <Head>
        <title>Mensaje de error | imSoft</title>
        <Metatags
          title={"Mensaje de error | imSoft"}
          description={"Mensaje de error"}
          keywords={"Mensaje de error, imSoft"}
          author={"Brandon Uriel García Ramos"}
          subject={"Mensaje de error"}
          date={"01/01/2023"}
          type={"Mensaje de error"}
          source={"https://www.imsoft.io/mensajes/mensajeDeError"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4"
          }
          url={"https://www.imsoft.io/mensajes/mensajeDeError"}
        />
      </Head>

      <main>
        <MessageComponent
          topic={infoNotificationMessage.topic}
          message={infoNotificationMessage.message}
          comment={infoNotificationMessage.comment}
        />
      </main>
    </>
  );
};

export default MensajeDeError;
