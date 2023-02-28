import React from "react";
import Head from "next/head";

import { Metatags } from "../../components/metatags";

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
      <Head>
        <title>Mensaje de confirmación | imSoft</title>
        <Metatags
          title={"Mensaje de confirmación | imSoft"}
          description={"Mensaje de confirmación"}
          keywords={"Mensaje de confirmación, imSoft"}
          author={"Brandon Uriel García Ramos"}
          subject={"Mensaje de confirmación"}
          date={"01/01/2023"}
          type={"Mensaje de confirmación"}
          source={"https://www.imsoft.io/mensajes/mensajeDeConfirmacion"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4"
          }
          url={"https://www.imsoft.io/mensajes/mensajeDeConfirmacion"}
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

export default MensajeDeConfirmacion;
