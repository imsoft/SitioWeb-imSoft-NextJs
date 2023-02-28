import Head from "next/head";

import { Metatags } from "../components/metatags";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from "../components/ui/IndexPage";

const index = () => {
  return (
    <>
      <Head>
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

      <main>
        {/* Inicio Primera Sección */}
        <FirstSection />
        {/* Fin Primera Sección */}

        {/* Inicio Segunda Sección */}
        <SecondSection />
        {/* Fin Segunda Sección */}

        {/* Inicio Tercera Sección */}
        <ThirdSection />
        {/* Fin Tercera Sección */}

        {/* Inicio Cuarta Sección */}
        <FourthSection />
        {/* Fin Cuarta Sección */}

        {/* Inicio Quinta Sección */}
        <FifthSection />
        {/* Fin Quinta Sección */}

        {/* Inicio Sexta Sección */}
        <SixthSection />
        {/* Fin Sexta Sección */}
      </main>
    </>
  );
};

export default index;
