import React from "react";
import Head from "next/head";
import Link from "next/link";

const prueba = () => {
  const linkFacebook = process.env.NEXT_PUBLIC_LINK_FACEBOOK?.toString();
  const linkInstagram = process.env.NEXT_PUBLIC_LINK_INSTAGRAM?.toString();
  const linkLinkedIn = process.env.NEXT_PUBLIC_LINK_LINKEDIN?.toString();
  const linkTwitter = process.env.NEXT_PUBLIC_LINK_TWITTER?.toString();
  const linkTiktok = process.env.NEXT_PUBLIC_LINK_TIKTOK?.toString();
  const linkWhatsappBusiness = process.env.NEXT_PUBLIC_LINK_WHATSAPP_BUSINESS?.toString();
  const linkYoutube = process.env.NEXT_PUBLIC_LINK_YOUTUBE?.toString();

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
        <br />
        <h2>Enlaces en env</h2>
        <Link href={`${linkFacebook}`}>
          <p>Ir a Facebook</p>
        </Link>
        <Link href={`${linkInstagram}`}>
          <p>Ir a Instagram</p>
        </Link>
        <Link href={`${linkLinkedIn}`}>
          <p>Ir a LinkedIn</p>
        </Link>
        <Link href={`${linkTwitter}`}>
          <p>Ir a Twitter</p>
        </Link>
        <Link href={`${linkTiktok}`}>
          <p>Ir a Tiktok</p>
        </Link>
        <Link href={`${linkWhatsappBusiness}`}>
          <p>Ir a WhatsApp</p>
        </Link>
        <Link href={`${linkYoutube}`}>
          <p>Ir a YouTube</p>
        </Link>
        <br />
        <h2>Enlaces sin env</h2>
        <Link href={"https://www.facebook.com/weareimsoft"}>
          <p>Ir a Facebook</p>
        </Link>
        <Link href={"https://www.instagram.com/weareimsoft/"}>
          <p>Ir a Instagram</p>
        </Link>
        <Link href={"https://www.linkedin.com/in/imsoft-%E2%80%8E-a3a236219/"}>
          <p>Ir a LinkedIn</p>
        </Link>
        <Link href={"https://twitter.com/weareimsoft"}>
          <p>Ir a Twitter</p>
        </Link>
        <Link href={"https://www.tiktok.com/@weareimsoft"}>
          <p>Ir a Tiktok</p>
        </Link>
        <Link href={"https://www.youtube.com/@weareimsoft"}>
          <p>Ir a WhatsApp</p>
        </Link>
        <Link href={"https://api.whatsapp.com/message/6P7VAOCL442IH1?autoload=1&app_absent=0"}>
          <p>Ir a YouTube</p>
        </Link>
      </div>
    </>
  );
};

export default prueba;
