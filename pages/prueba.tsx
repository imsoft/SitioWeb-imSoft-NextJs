import React from "react";
import Head from "next/head";

const prueba = () => {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "Título del contenido",
        text: "Texto del contenido",
        url: "https://imsoft.io",
      });
    } else {
      console.log(
        'La API de "web-share" no está disponible en este navegador.'
      );
    }
  };

  return (
    <>
      <div>
        <Head>
          <title>imSoft</title>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <h1>Bienvenido a imSoft</h1>
        <button onClick={handleShareClick}>Compartir</button>
      </div>
    </>
  );
};

export default prueba;
