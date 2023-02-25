import Image from "next/image";
import React from "react";

const nosotros = () => {
  return (
    <>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover rounded-br-lg lg:absolute lg:h-full"
              src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Fotos%20imSoft%2Fnosotros-imSoft.jpg?alt=media&token=562d50ef-cf49-4a19-adc6-6e0e7228a2d0"
              alt="Nosotros - imSoft"
              width={5760}
              height={3840}
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="font-semibold leading-6 text-primary-600">
                Trabajemos juntos
              </h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Nosotros
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                Siempre hemos sido apasionados por la tecnología y la
                informática. Después de graduarnos de la universidad con títulos
                en ingeniería informática, comenzamos a trabajar en una empresa
                de desarrollo de software, pero siempre hemos soñado con tener
                nuestra propia empresa.
              </p>
              <p className="mt-8 text-lg text-gray-500">
                Con el tiempo, nos dimos cuenta de que teníamos una habilidad
                especial para entender las necesidades de nuestros clientes y
                crear soluciones de software personalizadas que se adaptaran a
                ellas. Así que, con un poco de valentía y mucho trabajo duro,
                decidimos lanzar nuestra propia empresa de desarrollo de
                software llamada &quot;
                <span className="text-primary-500">imSoft</span>&quot;.
              </p>
              <p className="mt-8 text-lg text-gray-500">
                A pesar de que el camino no ha sido fácil, nos hemos mantenido
                motivados gracias a nuestra pasión por la tecnología y nuestro
                deseo de ayudar a nuestros clientes a tener éxito. Con nuestra
                dedicación y nuestra creatividad, pronto nos convertimos en una
                de las empresas de desarrollo de software más confiables para
                nuestros clientes.
              </p>
              <p className="mt-8 text-lg text-gray-500">
                Nuestros clientes quedaron impresionados por la calidad de
                nuestro trabajo y nuestro compromiso con la satisfacción del
                cliente. Muchos de ellos se convirtieron en leales seguidores de
                <span className="text-primary-500">imSoft</span>, y la empresa
                comenzó a crecer rápidamente.
              </p>
              <p className="mt-8 text-lg text-gray-500">
                Hoy en día, <span className="text-primary-500">imSoft</span> es
                conocida como una empresa de desarrollo de software de alta
                calidad y con un servicio excepcional. Nos mantenemos tan
                apasionados como el primer día por ayudar a nuestros clientes a
                tener éxito a través de soluciones de software personalizadas y
                de alta calidad. ¡Si estás buscando una empresa de desarrollo de
                software confiable y motivada,
                <span className="text-primary-500">imSoft</span> es la opción
                perfecta para ti!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default nosotros;
