import React, { ChangeEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

import { sendEmail } from "../../lib";

import SocialMediaBar from "../../components/ui/shared/SocialMediaBar";
import ContactInfo from "../../components/ui/shared/ContactInfo";

import { IMetatags } from "../../interfaces";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { dateMetatagInfo } from "../../data";

const Contacto = () => {
  const metatagsInfo: IMetatags = {
    title: "Contacto | imSoft",
    description:
      "¿Necesitas contactarnos para resolver una duda, solicitar información o contratar nuestros servicios? ¡No dudes en hacerlo! En nuestro sitio web encontrarás un formulario de contacto diseñado específicamente para que puedas comunicarte con nosotros de manera sencilla y eficaz",
    keywords: "Información de contacto, Contacto, imSoft",
    author: "Brandon Uriel García Ramos",
    subject: "Formulario de contacto",
    date: dateMetatagInfo,
    type: "Contacto",
    source: "https://www.imsoft.io/contacto",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec",
    url: "https://www.imsoft.io/contacto",
    robots: "index,follow",
  };

  const router = useRouter();

  const [inputName, setInputName] = useState("");
  const [inputEMail, setInputEMail] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [touchedName, setTouchedName] = useState(false);
  const [touchedEMail, setTouchedEMail] = useState(false);
  const [touchedPhoneNumber, setTouchedPhoneNumber] = useState(false);
  const [touchedMessage, setTouchedMessage] = useState(false);

  const onTextFieldChangedName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const onTextFieldChangedEMail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEMail(event.target.value);
  };

  const onTextFieldChangedPhoneNumber = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInputPhoneNumber(event.target.value);
  };

  const onTextFieldChangedMessage = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputMessage(event.target.value);
  };

  const onSend = async () => {
    inputName.length === 0 ? setTouchedName(true) : setTouchedName(false);
    inputEMail.length === 0 ? setTouchedEMail(true) : setTouchedEMail(false);
    inputPhoneNumber.length === 0
      ? setTouchedPhoneNumber(true)
      : setTouchedPhoneNumber(false);
    inputMessage.length === 0
      ? setTouchedMessage(true)
      : setTouchedMessage(false);

    if (
      inputName.length > 0 &&
      inputEMail.length > 0 &&
      inputPhoneNumber.length > 0 &&
      inputMessage.length > 0
    ) {
      try {
        await sendEmail(inputName, inputEMail, inputPhoneNumber, inputMessage);
      } catch (error) {
        console.warn(error);
        router.push("/mensajes/mensajeDeError");
        throw new Error("Hubo un error al enviar tu mensaje...");
      }

      setInputName("");
      setInputEMail("");
      setInputPhoneNumber("");
      setInputMessage("");
      router.push("/mensajes/mensajeDeConfirmacion");
    }
  };

  return (
    <>
      <Head>
        {/* MetaEtiquetas Básicas */}
        <title>{metatagsInfo.title}</title>
        <meta name="title" content={metatagsInfo.title} />
        <meta httpEquiv="title" content={metatagsInfo.title} />
        <meta name="description" lang="es" content={metatagsInfo.description} />
        <meta name="keywords" lang="es" content={metatagsInfo.keywords} />
        <meta name="date" content={metatagsInfo.date} />

        {/* Informacion del autor */}
        <meta name="author" content={metatagsInfo.author} />

        {/* Dublincore */}
        <meta name="DC.title" lang="es-MX" content={metatagsInfo.title} />
        <meta name="DC.creator" lang="es-MX" content={metatagsInfo.author} />
        <meta name="DC.subject" lang="es-MX" content={metatagsInfo.subject} />
        <meta
          name="DC.description"
          lang="es-MX"
          content={metatagsInfo.description}
        />
        <meta name="DC.publisher" lang="es-MX" content={metatagsInfo.author} />
        <meta name="DC.date" lang="es-MX" content={metatagsInfo.date} />
        <meta name="DC.type" lang="es-MX" content={metatagsInfo.type} />
        <meta name="DC.identifier" lang="es-MX" content={metatagsInfo.title} />
        <meta name="DC.source" lang="es-MX" content={metatagsInfo.source} />
        <meta name="DC.relation" lang="es-MX" content={metatagsInfo.source} />

        {/* Twitter */}
        <meta name="twitter:title" content={metatagsInfo.title} />
        <meta name="twitter:description" content={metatagsInfo.description} />
        <meta name="twitter:image:src" content={metatagsInfo.image} />
        <meta name="twitter:image:alt" content={metatagsInfo.title} />

        {/* Facebook */}
        <meta property="og:title" content={metatagsInfo.title} />
        <meta property="og:type" content={metatagsInfo.type} />
        <meta
          property="og:url"
          content={`https://www.imsoft.io${metatagsInfo.url}`}
        />
        <meta property="og:image" content={metatagsInfo.image} />
        <meta property="og:description" content={metatagsInfo.description} />

        {/* Google + / Pinterest */}
        <meta itemProp="description" content={metatagsInfo.description} />
        <meta itemProp="image" content={metatagsInfo.image} />

        {/* Robots */}
        <meta name="robots" content={metatagsInfo.robots} />
      </Head>

      <main>
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-primary-500" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="bg-primary-500 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-3xl">
                  ¡Contáctanos!
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-100">
                  Nuestro equipo de expertos está comprometido con entender tus
                  necesidades y ayudarte a tener éxito a través de soluciones de
                  software eficientes. ¡Contáctanos para obtener más
                  información!
                </p>

                <ContactInfo textStyle={"text-gray-100"} />

                <SocialMediaBar
                  iconStyle={"text-gray-100 hover:text-gray-300"}
                />
              </div>
            </div>
            <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <form className="grid grid-cols-1 gap-y-6" method="post">
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <label htmlFor="full-name" className="sr-only">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Nombre Completo"
                      onChange={onTextFieldChangedName}
                      onBlur={() => setTouchedName(true)}
                    />
                    {!inputName && touchedName && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {!inputName && touchedName && (
                    <p
                      className="-mt-4 ml-4 text-sm text-red-600"
                      id="email-error"
                    >
                      No nos escribiste tu nombre 👆
                    </p>
                  )}

                  <div className="relative mt-1 rounded-md shadow-sm">
                    <label htmlFor="email" className="sr-only">
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Correo Electrónico"
                      onChange={onTextFieldChangedEMail}
                      onBlur={() => setTouchedEMail(true)}
                    />
                    {!inputEMail && touchedEMail && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {!inputEMail && touchedEMail && (
                    <p
                      className="-mt-4 ml-4 text-sm text-red-600"
                      id="email-error"
                    >
                      No nos escribiste tu correo electrónico 👆
                    </p>
                  )}

                  <div className="relative mt-1 rounded-md shadow-sm">
                    <label htmlFor="phone" className="sr-only">
                      Número teléfonico
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Número teléfonico"
                      onChange={onTextFieldChangedPhoneNumber}
                      onBlur={() => setTouchedPhoneNumber(true)}
                    />
                    {!inputPhoneNumber && touchedPhoneNumber && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {!inputPhoneNumber && touchedPhoneNumber && (
                    <p
                      className="-mt-4 ml-4 text-sm text-red-600"
                      id="email-error"
                    >
                      No nos escribiste tu número teléfonico 👆
                    </p>
                  )}

                  <div className="relative mt-1 rounded-md shadow-sm">
                    <label htmlFor="message" className="sr-only">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Mensaje"
                      defaultValue={""}
                      onChange={onTextFieldChangedMessage}
                      onBlur={() => setTouchedMessage(true)}
                    />
                    {!inputMessage && touchedMessage && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {!inputMessage && touchedMessage && (
                    <p
                      className="-mt-4 ml-4 text-sm text-red-600"
                      id="email-error"
                    >
                      No nos escribiste tu mensaje 👆
                    </p>
                  )}

                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary-500 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      onClick={onSend}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacto;
