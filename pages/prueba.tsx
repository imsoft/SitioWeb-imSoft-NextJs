import React from "react";
import Head from "next/head";
import Image from "next/image";

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

        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover sm:rounded-tl-lg"
            src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Fotos%20imSoft%2Fdisen%CC%83amos%20sitios%20web%20para%20aumentar%20las%20ventas-imSoft.jpg?alt=media&token=4614732d-0f0d-496f-880d-a9035f822bb4"
            alt="Diseñamos sitios web para aumentar las ventas - imSoft"
            width={5760}
            height={3840}
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

      </div>
    </>
  );
};

export default prueba;
