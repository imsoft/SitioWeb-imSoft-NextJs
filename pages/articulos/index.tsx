import React from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";

import PostCard from "../../components/articles/PostCard";

import { getAllFilesMetadata } from "../../lib/mdx";

import { IMetatags, IPost } from "../../interfaces";
import { dateMetatagInfo } from "../../data";

interface Props {
  posts: IPost[];
}

export const index: NextPage<Props> = (props) => {
  const metatagsInfo: IMetatags = {
    title: "Artículos | imSoft",
    description:
      "¿Estás cansado de buscar información en internet y encontrar siempre lo mismo? ¿Te gustaría tener acceso a contenido fresco y relevante que te ayude a resolver tus dudas y problemas? ¡Entonces estás en el lugar indicado! En mis blogs encontrarás artículos de alta calidad, escritos con pasión y dedicación, que te brindarán información útil y actualizada sobre diversos temas de tu interés. Desde consejos para mejorar tu salud y bienestar, hasta tendencias en tecnología y negocios, pasando por curiosidades y reflexiones sobre la vida en general. No pierdas la oportunidad de enriquecer tu mente y expandir tus horizontes. ¡Únete a nuestra comunidad de lectores y descubre todo lo que tenemos para ofrecerte!",
    keywords: "imSoft, articulos, blogs, noticias",
    author: "Brandon Uriel García Ramos",
    subject: "Artículos",
    date: dateMetatagInfo,
    type: "Artículos",
    source: "https://www.imsoft.io/articulos",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4",
    url: "https://www.imsoft.io/articulos",
    robots: "index,follow",
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
        <div className="relative bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                Nuestros artículos
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-400 sm:mt-4">
                Este es tu nuevo espacio donde estar al tanto de consejos,
                actualizaciones, tips y noticias sobre tecnología, para que
                puedas mejorar tus proyectos.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {props.posts.map((post) => (
                <PostCard
                  key={post.title}
                  title={post.title}
                  image={post.image}
                  slug={post.slug}
                  category={post.category}
                  description={post.description}
                  date={post.date}
                  affiliation={post.affiliation}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllFilesMetadata();

  return {
    props: {
      posts,
    },
    revalidate: 86400,
  };
};

export default index;
