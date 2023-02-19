import React from "react";

const Metatags = () => {
  return (
    <>
      {/* MetaEtiquetas Básicas */}
      <section>
        {/* Título de la página. Longitud máxima 60 - 70 caracteres */}
        <title>imSoft | Sitios web | Páginas Web | Guadalajara</title>

        {/* Descripcion de página. No más de 155 caracteres. */}
        <meta
          name="description"
          content="Desarrollo de software/Sitios web/Aplicaciones web/Aplicaciones móviles/Tienda en línea/SEO"
        />
      </section>

      {/* Facebook */}
      <section>
        <meta property="og:title" content="imSoft" />
        <meta property="og:type" content="imSoft" />
        <meta property="og:url" content="imsoft.io" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FIsotipo%20imSoft.png?alt=media&token=3225c6af-e001-4967-ba24-c33009e5c25d"
        />
        <meta
          property="og:description"
          content="Desarrollo de software/Sitios web/Aplicaciones web/Aplicaciones móviles/Tienda en línea/SEO"
        />
        <meta property="og:site_name" content="imSoft" />
        <meta property="fb:admins" content="100064776523522" />
      </section>

      {/* Twitter */}
      <section>
        <meta name="twitter:card" content="imSoft" />
        <meta name="twitter:site" content="@weareimsoft" />
        <meta name="twitter:title" content="imSoft" />
        <meta
          name="twitter:description"
          content="Desarrollo de software/Sitios web/Aplicaciones web/Aplicaciones móviles/Tienda en línea/SEO"
        />
        <meta name="twitter:creator" content="@weareimsoft" />
        <meta
          name="twitter:image:src"
          content="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FIsotipo%20imSoft.png?alt=media&token=3225c6af-e001-4967-ba24-c33009e5c25d"
        />
      </section>

      {/* Google + / Pinterest */}
      <section>
        <meta itemProp="name" content="imSoft" />
        <meta
          itemProp="description"
          content="Desarrollo de software/Sitios web/Aplicaciones web/Aplicaciones móviles/Tienda en línea/SEO"
        />
        {/* Facebook image must be at least 600x315px */}
        <meta
          itemProp="image"
          content="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FIsotipo%20imSoft.png?alt=media&token=3225c6af-e001-4967-ba24-c33009e5c25d"
        />
      </section>
    </>
  );
};

export default Metatags;
