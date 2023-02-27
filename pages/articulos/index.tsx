import React from "react";
import { GetStaticProps, NextPage } from "next";

import PostCard from "../../components/articles/PostCard";

import { getAllFilesMetadata } from "../../lib/mdx";

import { IPost } from "../../interfaces";

interface Props {
  posts: IPost[];
}

export const index: NextPage<Props> = (props) => {
  return (
    <>
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
              actualizaciones, tips y noticias sobre tecnología, para que puedas
              mejorar tus proyectos.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {props.posts.map((post) => (
              <PostCard
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
