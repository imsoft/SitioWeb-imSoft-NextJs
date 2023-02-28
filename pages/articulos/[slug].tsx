import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

import { getAllFilesMetadata, getFileBySlug, getFiles } from "../../lib/mdx";

import { Metatags } from "../../components/metatags";

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
        <Metatags
          title={`${frontMatter.title}`}
          description={`${frontMatter.description}`}
          keywords={`${frontMatter.keywords}`}
          author={`${frontMatter.author}`}
          subject={`${frontMatter.subtitle}`}
          date={`${frontMatter.date}`}
          type={`${frontMatter.category}`}
          source={`${frontMatter.web}`}
          image={`${frontMatter.image}`}
          url={`${frontMatter.canonical_url}`}
        />
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
