import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* MetaEtiquetas Básicas */}
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon-imSoft.png" />

          {/* Idioma */}
          <meta name="language" content="Spanish" />
          <meta httpEquiv="content-language" content="es-MX, en-US" />
          <meta name="google" content="translate" />

          {/* GeoLocalización */}
          <meta name="geo.region" content="MX-JAL" />
          <meta name="geo.placename" content="Guadalajara" />
          <meta name="geo.position" content="20.672038;-103.338396" />
          <meta name="ICBM" content="20.672038, -103.338396" />

          {/* Periodos de chequeo */}
          <meta name="revisit-after" content="1 week" />

          {/* Informacion del autor */}
          <meta
            name="copyright"
            content="Brandon Uriel García Ramos | imSoft"
          />
          <meta name="generator" content="nextjs 13" />

          {/* Cache */}
          {/* <meta content="no-cache" name="Pragma" />
          <meta httpEquiv="pragma" content="no-cache" />
          <meta httpEquiv="cache-control" content="no-cache" /> */}

          {/* Dublincore */}
          <meta name="DC.contributor" lang="es-MX" content="imSoft" />
          <meta name="DC.format" lang="es-MX" content="text/html" />
          <meta name="DC.language" lang="es-MX" content="es" />
          <meta name="DC.coverage" lang="es-MX" content="Jalisco, México" />
          <meta
            name="DC.rights"
            lang="es-MX"
            content="Brandon Uriel García Ramos | imSoft"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="imSoft" />
          <meta name="twitter:site" content="@weareimsoft" />
          <meta name="twitter:creator" content="@weareimsoft" />
          <meta name="twitter:site:id" content="1287151557197418496" />

          {/* Facebook */}
          <meta property="og:site_name" content="imSoft" />
          <meta property="og:latitude" content="20.672038" />
          <meta property="og:longitude" content="-103.338396" />
          <meta
            property="og:street-address"
            content="Guadalajara, Jalisco, México"
          />
          <meta property="og:locality" content="Guadalajara" />
          <meta property="og:region" content="Jalisco" />
          <meta property="og:postal-code" content="44860" />
          <meta property="og:country-name" content="Mexico" />
          <meta property="fb:admins" content="100064776523522" />

          {/* Google + / Pinterest */}
          <meta itemProp="name" content="imSoft" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
