import React from "react";
import Head from "next/head";

import MessageComponent from "../components/ui/shared/MessageComponent";
import { Metatags } from "../components/metatags";

import { INotificationMessage } from "../interfaces";

const infoNotificationMessage: INotificationMessage = {
  topic: "404",
  message: "Esta página no existe",
  comment: "¡Ups! Parece que has llegado a una página que no existe.",
};

const ErrorPage = () => {
  return (
    <>
      <Head>
      <title>Esta página no existe | imSoft</title>
        <Metatags
          title={"Esta página no existe | imSoft"}
          description={
            "¡Ups! Parece que has llegado a una página que no existe."
          }
          keywords={"404, Esta página no existe, imSoft"}
          author={"Brandon Uriel García Ramos"}
          subject={"404"}
          date={"01/01/2023"}
          type={"404"}
          source={"https://www.imsoft.io/404"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4"
          }
          url={"https://www.imsoft.io/404"}
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

export default ErrorPage;
