import React from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";

import PostCard from "../../components/articles/PostCard";
import { Metatags } from "../../components/metatags";

import { getAllFilesMetadata } from "../../lib/mdx";

import { IPost } from "../../interfaces";

interface Props {
  posts: IPost[];
}

export const index: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <Metatags
          title={"Artículos | imSoft"}
          description={
            "¿Estás cansado de buscar información en internet y encontrar siempre lo mismo? ¿Te gustaría tener acceso a contenido fresco y relevante que te ayude a resolver tus dudas y problemas? ¡Entonces estás en el lugar indicado! En mis blogs encontrarás artículos de alta calidad, escritos con pasión y dedicación, que te brindarán información útil y actualizada sobre diversos temas de tu interés. Desde consejos para mejorar tu salud y bienestar, hasta tendencias en tecnología y negocios, pasando por curiosidades y reflexiones sobre la vida en general. No pierdas la oportunidad de enriquecer tu mente y expandir tus horizontes. ¡Únete a nuestra comunidad de lectores y descubre todo lo que tenemos para ofrecerte!"
          }
          keywords={"imSoft, articulos, blogs, noticias"}
          author={"Brandon Uriel García Ramos"}
          subject={"Artículos"}
          date={"01/01/2023"}
          type={"Artículos"}
          source={"https://www.imsoft.io/articulos"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4"
          }
          url={"https://www.imsoft.io/articulos"}
        />
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
