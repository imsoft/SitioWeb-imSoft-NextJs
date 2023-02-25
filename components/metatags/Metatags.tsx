import React from "react";

const Metatags = () => {
  return (
    <>
      {/* MetaEtiquetas Básicas */}
      <section>
        {/* Generales */}
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

        {/* Título de la página. Longitud aproximada de 65 caracteres */}
        <title>
          imSoft | Sitios web | Paginas web | Ecommerce | Seo | Guadalajara
        </title>
        <meta
          name="Title"
          content="imSoft | Sitios web | Paginas web | Ecommerce | Seo | Guadalajara"
        />
        <meta
          http-equiv="title"
          content="imSoft | Sitios web | Paginas web | Ecommerce | Seo | Guadalajara"
        />

        {/* Descripcion de página. Longitud aproximada de 155 caracteres. */}
        <meta
          name="description"
          lang="es"
          content="imSoft: Una empresa líder en desarrollo de software que ofrece soluciones innovadoras y personalizadas para satisfacer las necesidades de sus clientes."
        />
        <meta
          name="description"
          lang="en"
          content="imSoft: A leading software development company that offers innovative and customized solutions to meet the needs of its clients."
        />

        {/* Palabras clave de la página. Cantidad de palabras clave autorizadas de 5 o 6. */}
        <meta
          name="keywords"
          lang="es"
          content="desarrollo de software, diseño web, optimización para motores de búsqueda, comercio electrónico, desarrollo web, diseño de interfaces"
        />
        <meta
          name="keywords"
          lang="en"
          content="software development, web design, search engine optimization (SEO), e-commerce, web development, interface design."
        />

        {/* Robots */}
        <meta name="robots" content="index,follow" />

        {/* Idioma */}
        <meta name="language" content="Spanish" />
        <meta http-equiv="content-language" content="es-MX, en-US" />
        <meta name="google" content="translate" />
        {/* <meta name="language" content="English" /> */}

        {/* Verificación de Google */}
        <meta
          name="google-site-verification"
          content="pvyVE_CtvBayRNtgHKflmg3alt70Jg21otjzmB0xL-w"
        />

        {/* Periodos de chequeo */}
        <meta name="revisit-after" content="1 week" />

        {/* GeoLocalización */}
        <meta
          name="DC.title"
          content="imSoft | Sitios web | Paginas web | Ecommerce | Seo | Guadalajara"
        />
        <meta name="geo.region" content="MX-JAL" />
        <meta name="geo.placename" content="Guadalajara" />
        <meta name="geo.position" content="20.672038;-103.338396" />
        <meta name="ICBM" content="20.672038, -103.338396" />

        {/* Informacion del autor */}
        <meta name="author" content="Brandon Uriel Garcia Ramos" />
        <meta name="copyright" content="Brandon Uriel García Ramos | imSoft" />
        <meta name="generator" content="nextjs 13" />

        {/* Cache */}
        <meta content="no-cache" name="Pragma" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="cache-control" content="no-cache" />

        {/* Dublincore */}
        <meta name="DC.title" lang="es-MX" content="Título del documento" />
        <meta name="DC.creator" lang="es-MX" content="Autor del documento" />
        <meta name="DC.subject" lang="es-MX" content="Tema del documento" />
        <meta
          name="DC.description"
          lang="es-MX"
          content="Descripción del documento"
        />
        <meta name="DC.publisher" lang="es-MX" content="Editor del documento" />
        <meta
          name="DC.contributor"
          lang="es-MX"
          content="Colaborador en la creación del documento"
        />
        <meta
          name="DC.date"
          lang="es-MX"
          content="Fecha de creación del documento"
        />
        <meta name="DC.type" lang="es-MX" content="Tipo de documento" />
        <meta name="DC.format" lang="es-MX" content="Formato del documento" />
        <meta
          name="DC.identifier"
          lang="es-MX"
          content="Identificador del documento"
        />
        <meta name="DC.source" lang="es-MX" content="Fuente del documento" />
        <meta name="DC.language" lang="es-MX" content="Idioma del documento" />
        <meta
          name="DC.relation"
          lang="es-MX"
          content="Relación con otros recursos"
        />
        <meta
          name="DC.coverage"
          lang="es-MX"
          content="Área geográfica cubierta por el documento"
        />
        <meta
          name="DC.rights"
          lang="es-MX"
          content="Derechos de autor y restricciones de uso del documento"
        />

        {/* Bots no usaran yahoo ni DMOZ */}
        <meta name="robots" content="noodp,noydir" />
        {/* Bot yahoo no usara dir yahoo */}
        <meta name="slurp" content="noydir" />
        {/* Bot msn no usara DMOZ */}
        <meta name="msnbot" content="noodp" />
        {/* Bot Google no usara DMOZ */}
        <meta name="googlebot" content="noodp" />
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
        <meta property="og:latitude" content="37.416343" />
        <meta property="og:longitude" content="-122.153013" />
        <meta property="og:street-address" content="1601 California Ave" />
        <meta property="og:locality" content="Palo Alto" />
        <meta property="og:region" content="CA" />
        <meta property="og:postal-code" content="94304" />
        <meta property="og:country-name" content="USA" />
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
