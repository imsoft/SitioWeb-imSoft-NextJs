import React from "react";

import { IMetatags } from "../../interfaces";

import { dateMetatagInfo } from "../../data";

const index = () => {
  const metatagsInfo: IMetatags = {
    title: "Términos y Condiciones | imSoft",
    description: "Términos y Condiciones imSoft",
    keywords: "Términos y Condiciones, imSoft",
    author: "Brandon Uriel García Ramos",
    subject: "Términos y Condiciones",
    date: dateMetatagInfo,
    type: "Terminos y Condiciones",
    source: "https://www.imsoft.io/terminosYCondiciones",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4",
    url: "https://www.imsoft.io/terminosYCondiciones",
    robots: "index,follow",
  };

  return (
    <>
      <main>
        <div className="relative overflow-hidden bg-white py-16">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="block text-center text-lg font-semibold text-primary-600">
                  imSoft
                </span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Términos y Condiciones
                </span>
              </h1>
            </div>
            <div className="prose prose-lg prose-indigo max-w-screen-lg mx-auto mt-6 text-gray-500">
              <ul>
                <li>
                  Se cobrará la mitad del precio total al inicio del proyecto y
                  la otra mitad se cobrará al finalizar el proyecto, una vez
                  realizado este último pago el sitio web quedará público.
                </li>
                <li>
                  El tiempo del proyecto inicia cuando se realice el primer
                  pago.
                </li>
                <li>
                  Si se desea agregar una función no especificada en el
                  documento, se hará una modificación tanto en el precio como en
                  el tiempo del desarrollo.
                </li>
                <li>
                  Todos los textos, traducciones e imágenes deben ser provistos
                  por el cliente, en caso de no contar con textos e imágenes
                  imSoft puede proporcionar esa información con un costo extra.
                </li>
                <li>
                  Se cobrará una cuota anual para el dominio y el hosting de
                  $2,000 (más IVA).
                </li>
                <li>
                  Se colocará el logo de imSoft que llevará al sitio web oficial
                  del mismo en la última sección del sitio web.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
