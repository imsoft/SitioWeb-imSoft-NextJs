import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Metatags } from "../components/metatags";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon-imSoft.png" />
          <Metatags
            title={"imSoft"}
            description={
              "¿Necesitas contactarnos para resolver una duda, solicitar información o contratar nuestros servicios? ¡No dudes en hacerlo! En nuestro sitio web encontrarás un formulario de contacto diseñado específicamente para que puedas comunicarte con nosotros de manera sencilla y eficaz."
            }
            keywords={
              "imSoft, pagina web, paginas web, sitio web, sitios web, tienda en linea, tienda electronica, ecommerce, seo, consultoria"
            }
            author={"Brandon Uriel García Ramos"}
            subject={"Inicio"}
            date={"01/01/2023"}
            type={"Inicio"}
            source={"https://www.imsoft.io/"}
            image={
              "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4"
            }
            url={"https://www.imsoft.io/"}
          />
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
