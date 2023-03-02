import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

import { getAllFilesMetadata, getFileBySlug, getFiles } from "../../lib/mdx";

import MdxComponent from "../../components/articles/MdxComponent";
import RecommendationsPosts from "../../components/articles/RecommendationsPosts";

import { IPost } from "../../interfaces";

interface Props {
  source: object;
  frontMatter: IPost;
  posts: IPost[];
}

const Post = ({ source, frontMatter, posts }: Props) => {
  const [randomObjectsResult, setRandomObjectsResult] = useState<IPost[]>([]);

  useEffect(() => {
    const randomIndexes = new Set<number>();
    while (randomIndexes.size < 3) {
      randomIndexes.add(Math.floor(Math.random() * posts.length));
    }
    const result = Array.from(randomIndexes).map((i) => posts[i]);
    setRandomObjectsResult(result);
  }, [posts]);

  return (
    <>
      <Head>
        {/* MetaEtiquetas Básicas */}
        <title>{frontMatter.title} | imSoft</title>
        <meta name="title" content={`${frontMatter.title} | imSoft`} />
        <meta httpEquiv="title" content={`${frontMatter.title} | imSoft`} />
        <meta name="description" lang="es" content={frontMatter.description} />
        <meta name="keywords" lang="es" content={frontMatter.keywords} />
        <meta name="date" content={frontMatter.date} />

        {/* Informacion del autor */}
        <meta name="author" content={frontMatter.author} />

        {/* Dublincore */}
        <meta name="DC.title" lang="es-MX" content={frontMatter.title} />
        <meta name="DC.creator" lang="es-MX" content={frontMatter.author} />
        <meta name="DC.subject" lang="es-MX" content={frontMatter.subtitle} />
        <meta
          name="DC.description"
          lang="es-MX"
          content={frontMatter.description}
        />
        <meta name="DC.publisher" lang="es-MX" content={frontMatter.author} />
        <meta name="DC.date" lang="es-MX" content={frontMatter.date} />
        <meta name="DC.type" lang="es-MX" content={frontMatter.category} />
        <meta name="DC.identifier" lang="es-MX" content={frontMatter.title} />
        <meta name="DC.source" lang="es-MX" content={frontMatter.web} />
        <meta name="DC.relation" lang="es-MX" content={frontMatter.web} />

        {/* Twitter */}
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.description} />
        <meta name="twitter:image:src" content={frontMatter.image} />
        <meta name="twitter:image:alt" content={frontMatter.title} />

        {/* Facebook */}
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:type" content={frontMatter.category} />
        <meta
          property="og:url"
          content={`${frontMatter.canonical_url}`}
        />
        <meta property="og:image" content={frontMatter.image} />
        <meta property="og:description" content={frontMatter.description} />

        {/* Google + / Pinterest */}
        <meta itemProp="description" content={frontMatter.description} />
        <meta itemProp="image" content={frontMatter.image} />

        {/* Robots */}
        <meta name="robots" content="index,follow" />
      </Head>

      <main>
        <div className="mx-auto max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8">
          <div className="prose prose-lg prose-indigo max-w-screen-lg mx-auto mt-6 text-gray-500">
            <MDXRemote
              compiledSource={""}
              {...source}
              components={MdxComponent}
            />
          </div>
        </div>

        <RecommendationsPosts props={randomObjectsResult} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const { source, frontMatter } = await getFileBySlug(slug);

  const posts = await getAllFilesMetadata();

  return {
    props: {
      source,
      frontMatter,
      posts,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
